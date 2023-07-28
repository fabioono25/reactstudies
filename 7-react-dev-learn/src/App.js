import "./App.css";
import Counter from "./components/counter";
import ImageGalery from "./components/hooks/1a-image-galery";
import TodoList from "./components/hooks/1c-initial-todos";
import Count from "./components/hooks/1d-count";
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
      <br />
      <ImageGalery />
      <br />
      <TodoList />
      <br />
      <Count />
    </div>
  );
}

export default App;
