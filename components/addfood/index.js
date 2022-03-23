import { useRef, useState } from "react";
import axios from "axios";
import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';

export default function AddFood({ closeModal }) {
  const [disable, setDisable] = useState(false);
  const formRef = useRef();

  async function addNewFood(params) {
    setDisable(true);
    const {
      addFoodName,
      addFoodPrice,
      addFoodImageUrl,
      addFoodActive,
      addFoodDescription,
      addFoodIngredients,
    } = formRef.current;
    const name = addFoodName.value;
    const price = addFoodPrice.value;
    const imageUrl = addFoodImageUrl.value;
    const active = addFoodActive.value;
    const description = addFoodDescription.value;
    const ingredients = addFoodIngredients.value;
    await axios.post("/api/food", {
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
      <>
      <div>
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
                  <input name="addFoodName" type="text" className="form-control" />
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
                  <input name="addFoodPrice" type="text" className="form-control" />
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
                  <input name="addFoodActive" type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>ImageUrl</label>
              </div>
              <div>
                <input name="addFoodImageUrl" type="text" className="form-control" />
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>Ingredients</label>
              </div>
              <div>
                <textarea
                  style={{ width: "100%", height: "100px" }}
                  name="addFoodIngredients"
                  type="text" className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>Description</label>
              </div>
              <div>
                <textarea
                  style={{ width: "100%", height: "100px" }}
                  name="addFoodDescription"
                  type="text" className="form-control"
                ></textarea>
              </div>
            </div>
          </form>
    </ModalBody>
<ModalFooter>
<button className="btn btn-danger" style={{ marginLeft: "0" }} onClick={() => closeModal()}>
            Cancel
          </button>
          <button
            disabled={disable}
            className="btn btn-success"
            onClick={() => addNewFood()}
          >
            Add
          </button>
</ModalFooter>
  </Modal>
</div>
    
    <div className="modal">
      <div className="modal-backdrop" onClick={() => closeModal()}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add Foodxxx</h3>
          <span
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => closeModal()}
          >
            X
          </span>
        </div>
        <div className="modal-body content">
         xx
        </div>
        <div className="modal-footer">
         
        </div>
      </div>
    </div>
    </>
  );
}