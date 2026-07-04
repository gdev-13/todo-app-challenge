import ToDoHeader from "./components/ToDoHeader";
import ToDoInput from "./components/ToDoInput";

const todos = [
    {id: 1, text: "Complete online JavaScript course"},
    {id: 2, text: "Jog around the park 3x"},
    {id: 3, text: "10 minutes meditation"}
]

function App() {
    return (
        <main className="bg-dark-navy-950 h-screen">
            <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
                <div className="max-w-175 m-auto p-8">
                    <ToDoHeader />
                    <ToDoInput />
                    <div className="bg-dark-navy-900 rounded-md">
                        <ul>
                            {
                                todos.map((todo) => (
                                    <li key={todo.id} className="p-6 border-b border-dark-purple-700">
                                        <div className="flex items-center gap-4">
                                            <button className="w-6 h-6 border border-dark-purple-700 rounded-full cursor-pointer"></button>
                                            <p className="text-dark-purple-100">{todo.text}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default App;