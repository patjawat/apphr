import styles from "./Foods.module.css";
import FoodCard from "../../components/foodcard";
import { PrismaClient } from "@prisma/client";
import AddFood from "../../components/addfood";
import { useState } from "react";
import Layout from "../../components/Layouts"

const prisma = new PrismaClient();
type Props = {
foods:any,
food:any,
user:any,
i:any
title: any
}
const  Foods = (props: Props) => {
  const [showAddFoodModal, setShowAddFoodModal] = useState(false);
  const foods = props.foods;

  return (
    <Layout>

<div className="modal modal-blur fade" id="modal-report" tabIndex={-1} style={{display: 'none'}} aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">New report</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="example-text-input" placeholder="Your report name" />
        </div>
        <label className="form-label">Report type</label>
        <div className="form-selectgroup-boxes row mb-3">
          <div className="col-lg-6">
            <label className="form-selectgroup-item">
              <input type="radio" name="report-type" defaultValue={1} className="form-selectgroup-input" defaultChecked />
              <span className="form-selectgroup-label d-flex align-items-center p-3">
                <span className="me-3">
                  <span className="form-selectgroup-check" />
                </span>
                <span className="form-selectgroup-label-content">
                  <span className="form-selectgroup-title strong mb-1">Simple</span>
                  <span className="d-block text-muted">Provide only basic data needed for the report</span>
                </span>
              </span>
            </label>
          </div>
          <div className="col-lg-6">
            <label className="form-selectgroup-item">
              <input type="radio" name="report-type" defaultValue={1} className="form-selectgroup-input" />
              <span className="form-selectgroup-label d-flex align-items-center p-3">
                <span className="me-3">
                  <span className="form-selectgroup-check" />
                </span>
                <span className="form-selectgroup-label-content">
                  <span className="form-selectgroup-title strong mb-1">Advanced</span>
                  <span className="d-block text-muted">Insert charts and additional advanced analyses to be inserted in the report</span>
                </span>
              </span>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-3">
              <label className="form-label">Report url</label>
              <div className="input-group input-group-flat">
                <span className="input-group-text">
                  https://tabler.io/reports/
                </span>
                <input type="text" className="form-control ps-0" defaultValue="report-01" autoComplete="off" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label className="form-label">Visibility</label>
              <select className="form-select">
                <option value={1} selected>Private</option>
                <option value={2}>Public</option>
                <option value={3}>Hidden</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Client name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Reporting period</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-lg-12">
            <div>
              <label className="form-label">Additional information</label>
              <textarea className="form-control" rows={3} defaultValue={""} />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#" className="btn btn-link link-secondary" data-bs-dismiss="modal">
          Cancel
        </a>
        <a href="#" className="btn btn-primary ms-auto" data-bs-dismiss="modal">
          {/* Download SVG icon from http://tabler-icons.io/i/plus */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg>
          Create new report
        </a>
      </div>
    </div>
  </div>
</div>



    <div className={styles.foodsCnt}>
      <div className={styles.foodsBreadcrumb}>
        <div>
          <h2>Recipes 🥗🥘🍱🍛</h2>
          {JSON.stringify(showAddFoodModal)}
        </div>
        <div>
          <button
            className="btn"
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              fontWeight: "500",
            }}
            onClick={() => setShowAddFoodModal((pV) => !pV)}
          >
            Add Food
          </button>

          <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#modal-report">
                    Modal with form
                  </a>






        </div>
      </div>
      <div className={styles.foods}>
        {foods?.map((food : any, i : any) => (
          <FoodCard food={food} key={i} />
        ))}
      </div>
      {showAddFoodModal ? (
        <AddFood closeModal={() => setShowAddFoodModal(false)} />
      ) : null}
    </div>
    </Layout>

  );
}

export async function getServerSideProps() {
  const allFoods = await prisma.food.findMany();
  return {
    props: {
      foods: allFoods,
    },
  };
}

export default Foods;