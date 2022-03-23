import { useState, useRef } from "react";
import axios from "axios";
import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';


export default function EditFood({ closeModal, food }) {
  const formRef = useRef();

  const [disable, setDisable] = useState(false);

  async function editFood() {
    setDisable(true);
    const {
      editFoodName,
      editFoodPrice,
      editFoodImageUrl,
      editFoodActive,
      editFoodDescription,
      editFoodIngredients,
    } = formRef.current;

    const name = editFoodName.value;
    const price = editFoodPrice.value;
    const imageUrl = editFoodImageUrl.value;
    const active = editFoodActive.value;
    const description = editFoodDescription.value;
    const ingredients = editFoodIngredients.value;

    await axios.put("/api/food", {
      id: parseInt(food?.id),
      name,
      price,
      imageUrl,
      active,
      description,
      ingredients,
    });

    setDisable(false);
    window.location.reload();
  }

  return (
    <Modal
    fullscreen="lg"
    scrollable
    size="lg"
    isOpen={open}
    toggle={() => setDisable(true)}
  >
    <ModalHeader toggle={() => closeModal()}>
      Modal title
    </ModalHeader>
    <ModalBody>
          <form ref={formRef}>
            <div style={{ display: "flex", margin: "2px 2px 0 0" }}>
              <div
                style={{ flex: "1 1 100%", margin: "0 0 2px 5px" }}
                className="inputField"
              >
                <div className="label">
                  <label>Name</label>
                </div>
                <div>
                  <input
                    defaultValue={food?.name}
                    name="editFoodName"
                    type="text"
                  />
                </div>
              </div>
              <div
                style={{ flex: "1 1 50%", margin: "0 0 2px 5px" }}
                className="inputField"
              >
                <div className="label">
                  <label>Price($)</label>
                </div>
                <div>
                  <input
                    defaultValue={food?.price}
                    name="editFoodPrice"
                    type="text"
                  />
                </div>
              </div>
              <div
                style={{ flex: "1 1 50%", margin: "0 0 2px 5px" }}
                className="inputField"
              >
                <div className="label">
                  <label>Active</label>
                </div>
                <div>
                  <input
                    defaultValue={food?.active}
                    name="editFoodActive"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="inputField">
              <div className="label">
                <label>ImageUrl</label>
              </div>
              <div>
                <input
                  defaultValue={food?.imageUrl}
                  name="editFoodImageUrl"
                  type="text"
                />
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>Ingredients</label>
              </div>
              <div>
                <textarea
                  defaultValue={food?.ingredients}
                  style={{ width: "100%", height: "100px" }}
                  name="editFoodIngredients"
                  type="text"
                ></textarea>
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>Description</label>
              </div>
              <div>
                <textarea
                  defaultValue={food?.description}
                  style={{ width: "100%", height: "100px" }}
                  name="editFoodDescription"
                  type="text"
                ></textarea>
              </div>
            </div>
          </form>
          </ModalBody>
<ModalFooter>
<button className="btn btn-danger" onClick={() => closeModal()}>Cancel</button>
          <button disabled={disable} className="btn btn-primary" onClick={() => editFood()}>
            Save
          </button>
</ModalFooter>
  </Modal>
       
  );
}
