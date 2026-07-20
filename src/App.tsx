import { useState, type FormEvent } from "react";
import ToDoContainer from "./components/ToDoContainer";
import ToDoHeader from "./components/ToDoHeader";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

interface ToDo {
    id: number;
    text: string;
    completed: boolean;
}

function App() {

    const [todos, setTodos] = useState<ToDo[]>([]);
    const addTodo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const todoText = formData.get("todo") as string;
        if (!todoText.trim()) return;
        console.log(todoText);
        setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: todoText, completed: false }]);
    }

    return (
        <ToDoContainer>
            <ToDoHeader />
            <ToDoInput addTodo={addTodo} />
            <ToDoList />
        </ToDoContainer>
    )
};

export default App;