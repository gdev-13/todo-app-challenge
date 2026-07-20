import ToDoContainer from "./components/ToDoContainer";
import ToDoHeader from "./components/ToDoHeader";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
    return (
        <ToDoContainer>
            <ToDoHeader />
            <ToDoInput />
            <ToDoList />
        </ToDoContainer>
    )
};

export default App;