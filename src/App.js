import Add from "./components/Add";
import TodoLists from "./components/TodoLists";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Add />
      <TodoLists />
    </div>
  );
}
export default App;
