import "./App.css";
import Counter from "./components/counter";
import Products from "./components/producs/products";
import ShoppingList from "./components/shopping-list";
import User from "./components/user";

function App() {
  return (
    <div style={{ paddingLeft: 100 }}>
      <User />
      <ShoppingList />
      <Counter />
      <br />
      <Products />
    </div>
  );
}

export default App;
