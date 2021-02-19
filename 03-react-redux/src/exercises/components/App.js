import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";
import ShoppingCart from "./ShoppingCart";
import { addItems, addOneItem, removeItem, updateItem} from "../redux/itemsSlice";

function App() {
  // ✅ use the useSelector hook to get the isDarkMode value from Redux state
  // replace this variable with the value returned by useSelector
  const isDarkMode = useSelector((state)=>state.theme.isDarkMode)

  const dispatch = useDispatch();

  // populate store
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((r) => r.json())
      .then((items) => {
        const action = addItems(items);
        dispatch(action)
        // ✅ use the addItem action imported above to dispatch the items to the store
      });
  }, [dispatch]);

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header />
      <ItemForm />
      <ShoppingList />
      <ShoppingCart />
    </div>
  );
}

export default App;
