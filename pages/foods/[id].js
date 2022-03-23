import styles from "./Food.module.css";
import { useState } from "react";
import EditFood from "../../components/editfood";
import axios from "axios";
import { useRouter } from "next/router";
import prisma from "../../lib/prisma";
import Layout from "../../components/Layouts"


export default function Food(props) {
  const [showEditFoodModal, setShowEditFoodModal] = useState(false);
  const router = useRouter();
  const { food } = props;

  async function deleteFood() {
    if (window.confirm("Do you want to delete this food?")) {
      // ...
      await axios.delete("/api/food", { id: parseInt(food?.id) });
      //router.push("/foods");
    }
  }
  return (
    <Layout>
      <div className={styles.foodContainer}>
        <div className={styles.food}>
          <div
            alt={`Food Image of: ${food?.name}`}
            aria-label={`Food Image of: ${food?.name}`}
            className={styles.foodImage}
            style={{ backgroundImage: `url(${food?.imageUrl})` }}
          ></div>

          <div className={styles.foodDetails}>
            <div className={styles.foodName}>
              <h1>{food?.name}</h1>
            </div>
            <div style={{ padding: "5px 0" }}>
              <span>
                <button
                  onClick={() => setShowEditFoodModal((pV) => !pV)}
                  style={{ marginLeft: "0" }}
                  className="btn"
                >
                  Edit
                </button>
                <button onClick={deleteFood} className="btn btn-danger">
                  Delete
                </button>
              </span>
            </div>
            <div style={{ padding: "5px 0" }}>
              <span> Price(💵): {food?.price}</span>
            </div>
            <div className={styles.foodDescIngreCnt}>
              <h2>Ingredients</h2>
              <div className={styles.foodSynopsis}>{food?.ingredients}</div>
            </div>
            <div className={styles.foodDescIngreCnt}>
              <h2>Description</h2>
              <div className={styles.foodSynopsis}>{food?.description}</div>
            </div>
          </div>
        </div>
        {showEditFoodModal ? (
          <EditFood food={food} closeModal={() => setShowEditFoodModal(false)} />
        ) : null}
      </div>
    </Layout>

  );

}
export async function getServerSideProps(context) {
  const { id } = context.params;
  const food = await prisma.food.findUnique({
    where: { id: parseInt(id) },
  });
  return {
    props: {
      food,
    },
  };
}


