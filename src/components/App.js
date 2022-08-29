import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allItems, setAllItems] = useState(itemData);


  function newToggle(){
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  
  function onCategoryChange(event){
    console.log("new list event", event.target.value)
    setSelectedCategory(event.target.value);
  }

  
console.log('all items', itemData)
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={newToggle} isDarkMode = {isDarkMode}/>
      <ShoppingList items={allItems} selectedCategory = {selectedCategory} onCategoryChange = {onCategoryChange}/>
    </div>
  );
}

export default App;

// Create a Filter component by refactoring the <select> element out of the ShoppingList component. 
// Changing the selection in the dropdown should still change which items are displayed in the shopping list.

// You will need to pass a callback function as a prop called onCategoryChange to the Filter component in order for the test to pass.