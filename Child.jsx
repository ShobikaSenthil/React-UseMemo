import { useState } from "react";

const ChildItem = ({ nodesItems }) => {
  const [itemVisible, setItemVisible] = useState({});

  const handleNestedItem = (i) => {
    setItemVisible((lastState) => {
      return { ...lastState, [i]: !itemVisible[i] };
    });
  };

  return (
    <div>
      <ul>
        {nodesItems.map((item, i) => {
          return (
            <li style={{ listStyle: "none" }} key={i}>
              {item.childrens && item.childrens.length > 0 && (
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={() => handleNestedItem(i)}
                >
                  {itemVisible[i] ? "▾" : "▸"}
                </button>
              )}
              {item.name}
              {itemVisible[i] && item.childrens.length > 0 && (
                <ChildItem nodesItems={item.childrens} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ChildItem;