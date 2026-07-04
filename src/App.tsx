import ToDoHeader from "./components/ToDoHeader";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
    return (
        <main className="bg-dark-navy-950 h-screen">
            <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
                <div className="max-w-175 m-auto p-8">
                    <ToDoHeader />
                    <ToDoInput />
                    <ToDoList />
                </div>
            </div>
        </main>
    )
};

export default App;