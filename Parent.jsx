import { useState } from "react";
import ChildItem from "./Child";

const DropDownItem = () => {
  const [items, setItems] = useState([
    {
      name: "Vegetables",
      childrens: [
        { name: "Tomato", childrens: [] },
        { name: "Potato", childrens: [] },
        {
          name: "Onion",
          childrens: [
            { name: "Yellow" },
            { name: "Purple" },
            { name: "White" },
          ],
        },
      ],
    },
    {
      name: "Fruits",
      childrens: [
        {
          name: "Apple",
          childrens: [
            { name: "Kashmiri-Apple", childrens: [] },
            {
              name: "Fuji",
              childrens: [{ name: "Red-Apple" }, { name: "Black-Apple" }],
            },
            { name: "Macintosh" },
          ],
        },
        { name: "Banana", childrens: [] },
        { name: "Orange", childrens: [] },
        { name: "Grapes" },
      ],
    },
  ]);

  return <ChildItem nodesItems={items} />;
};
export default DropDownItem;
