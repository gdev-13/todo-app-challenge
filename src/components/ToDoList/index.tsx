import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const todos = [
    { id: 1, text: "Complete online JavaScript course" },
    { id: 2, text: "Jog around the park 3x" },
    { id: 3, text: "10 minutes meditation" }
]

function ToDoList() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id} className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}>
                            <div className="flex items-center gap-4">
                                <button className={`w-6 h-6 border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer`}></button>
                                <p className={themeConfig[theme].todo.textColor}>{todo.text}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className={`text-sm flex justify-between items-center p-4 ${themeConfig[theme].layout.textColor}`}>
                <p>{todos.length} items total</p>
                <div className="flex gap-4">
                    <button className="text-bright-blue">All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                <button>Clear Selected</button>
            </div>
        </div>
    )
};

export default ToDoList;