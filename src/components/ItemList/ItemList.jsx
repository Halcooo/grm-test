import React from "react";
import { useState } from "react";
import FormModal from "../FormModal/FormModal";
import "./ItemList.css";

function ItemList() {
  const [items, setitems] = useState([
    {
      name: "Item1",
      score: 0,
    },
    {
      name: "Item2",
      score: 0,
    },
    {
      name: "Item3",
      score: 0,
    },
    {
      name: "Item4",
      score: 0,
    },
    {
      name: "Item5",
      score: 0,
    },
    {
      name: "Item6",
      score: 0,
    },
  ]);

  const [formOpened, setformOpened] = useState(false);
  return (
    <div className="table-wrapper">
      <table className="list-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {items
            .sort((a, b) => b.score - a.score)
            .map((item, i) => {
              return (
                <tr key={item.name}>
                  <th>{i + 1}</th>
                  <th>{item.name}</th>
                  <th>{item.score}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button className="open-modal-button" onClick={() => setformOpened(true)}>
        Open form
      </button>
      {formOpened && (
        <FormModal
          closeForm={() => setformOpened(false)}
          items={items}
          updateItems={setitems}
        ></FormModal>
      )}
    </div>
  );
}

export default ItemList;
