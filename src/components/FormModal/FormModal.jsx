import "./FormModal.css";
import { useState } from "react";

function FormModal(props) {
  const [counter, setcounter] = useState(0);
  const [secondCounter, setsecondCounter] = useState(1);
  const [firstItemValue, setfirstItemValue] = useState(0);
  const [secondItemValue, setsecondItemValue] = useState(0);

  const handleSubmit = () => {
    const items = props.items;
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      if (i === counter && firstItemValue > secondItemValue) {
        console.log('prvi if', secondCounter, i, element);
        element.score += 1;
      }
      if (i === secondCounter && secondItemValue > firstItemValue) {
        console.log('drugi if', secondCounter, i, element);
        element.score += 1;
      }
    }

    props.updateItems(items);

    setsecondCounter(secondCounter + 1);

    if (secondCounter === items.length - 1) {
      setcounter(counter + 1);
      setsecondCounter(counter + 2);
    }
    if (counter === items.length - 2) {
      props.closeForm();
    }
  };
  return (
    <div className="overlay">
      <div className="modal-window">
        <div className="close-button-wrapper">
          <div className="modal-title">Compare all items</div>
          <div className="close-button" onClick={props.closeForm}>
            X
          </div>
        </div>

        <div className="items">
          {props.items.map((item, i) => {
            if (i === counter) {
              return (
                <div className="item" key={item.name}>
                  <div className="item-name">{item.name}</div>
                  <input
                    min="0"
                    defaultValue={firstItemValue}
                    type="number"
                    onChange={(e) => {
                      setfirstItemValue(e.target.value);
                    }}
                  />
                </div>
              );
            }
          })}
          {props.items.map((item, i) => {
            if (i === secondCounter) {
              return (
                <div className="item" key={item.name}>
                  <div className="item-name">{item.name}</div>
                  <input
                    min="0"
                    type="number"
                    defaultValue={secondItemValue}
                    onChange={(e) => {
                      console.log('druga', item.name, e.target.value);
                      setsecondItemValue(e.target.value);
                    }}
                  />
                </div>
              );
            }
          })}
        </div>
        <button
          className="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default FormModal;
