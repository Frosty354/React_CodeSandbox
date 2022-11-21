import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemStatus, setitemStatus] = useState("Add");
  const [activeIndex, setActiveIndex] = useState(null);
  const additemHandler = () => {
    if (itemName.length) {
      setTodoArray([...todoArray, itemName]);
      setItemName("");
    }
  };
  const deleteItemHandler = (index) => {
    todoArray.splice(index, 1);
    setTodoArray([...todoArray]);
  };
  const updateItemHandler = () => {
    todoArray[activeIndex] = itemName;
    setTodoArray([...todoArray]);
    setitemStatus("Add");
  };
  return (
    <div className="App">
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button
        onClick={itemStatus === "Add" ? additemHandler : updateItemHandler}
      >
        {itemStatus} Item
      </button>
      {todoArray.map((item, i) => {
        return (
          <div key={i}>
            {item}
            <button onClick={() => deleteItemHandler(i)}>Delete</button>
            <button
              onClick={() => {
                setitemStatus("Update"), setActiveIndex(i);
              }}
            >
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
}
