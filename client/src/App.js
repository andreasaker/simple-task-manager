import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import UpdateTask from "./pages/UpdateTask";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/updateTask/:id" element={<UpdateTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
