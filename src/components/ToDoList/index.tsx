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
        <>
            <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.id} className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}>
                                <div className="flex items-center gap-4">
                                    <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-px">
                                        <button className={`w-full h-full border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer ${themeConfig[theme].todo.backgroundColor}`}></button>
                                    </span>
                                    <p className={themeConfig[theme].todo.textColor}>{todo.text}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className={`text-sm flex justify-between items-center p-4 ${themeConfig[theme].layout.textColor}`}>
                    <p>{todos.length} items total</p>
                    <div className="hidden sm:flex gap-4">
                        <button className={`text-bright-blue cursor-pointer ${theme === "dark" ? "hover:text-dark-purple-100" : "hover:text-light-navy-850"}`}>All</button>
                        <button className={`cursor-pointer ${theme === "dark" ? "hover:text-dark-purple-100" : "hover:text-light-navy-850"}`}>Active</button>
                        <button className={`cursor-pointer ${theme === "dark" ? "hover:text-dark-purple-100" : "hover:text-light-navy-850"}`}>Completed</button>
                    </div>
                    <button className={`cursor-pointer ${theme === "dark" ? "hover:text-dark-purple-100" : "hover:text-light-navy-850"}`}>Clear Selected</button>
                </div>
            </div>

            <div className={`${themeConfig[theme].todo.backgroundColor} flex justify-center gap-5 py-4 sm:hidden ${themeConfig[theme].layout.textColor} rounded-md mt-4`}>
                <button className={`text-bright-blue cursor-pointer ${theme === "dark" ? "hover:text-dark-purple-100" : "hover:text-light-navy-850"}`}>All</button>
                <button className={`cursor-pointer ${theme === "dark" ? "hover:text-dark-purple-100" : "hover:text-light-navy-850"}`}>Active</button>
                <button className={`cursor-pointer ${theme === "dark" ? "hover:text-dark-purple-100" : "hover:text-light-navy-850"}`}>Completed</button>
            </div>
        </>
    )
};

export default ToDoList;