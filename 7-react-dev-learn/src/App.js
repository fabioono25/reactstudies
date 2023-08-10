import "./App.css";
import VideoPlayerTest from "./components/hooks/useEffect/1-video-player";
import ChatRoom from "./components/hooks/useEffect/2-chat";
import Todos from "./components/hooks/useEffect/3-fecthing";
import RenderPlayground from "./components/hooks/useEffect/4-schedule-action";
import Counter from "./components/hooks/useEffect/5-counter";
import { Form } from "./components/hooks/useEffect/6-stave-vs-effect";

function App() {
  return (
    <div style={{ paddingLeft: 100 }}>
      {/* <User />
      <ShoppingList />
      <Counter />
      <br />
      <Products />
      <br />
      <ImageGalery />
      <br />
      <TodoList />
      <br />
      <Count /> */}
      {/* <VideoPlayerTest /> */}
      {/* <ChatRoom /> */}
      {/* <Todos /> */}
      {/* <RenderPlayground /> */}
      {/* <Counter /> */}
      <Form />
    </div>
  );
}

export default App;
