const todos = [
    { id: 1, text: "Complete online JavaScript course" },
    { id: 2, text: "Jog around the park 3x" },
    { id: 3, text: "10 minutes meditation" }
]

function ToDoList() {
    return (
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
            <div className="flex justify-between items-center p-4 text-dark-purple-100">
                <p>{todos.length} items total</p>
                <div className="flex gap-4">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                <button>Clear Selected</button>
            </div>
        </div>
    )
};

export default ToDoList;