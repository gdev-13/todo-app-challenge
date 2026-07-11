import ToDoHeader from "./components/ToDoHeader";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { themeConfig } from "./contexts/theme";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";

function App() {

    const { theme } = useContext(ThemeContext);

    return (
        <main className={`${themeConfig[theme].layout.backgroundColor} h-screen`}>
            <div className={`${themeConfig[theme].layout.heroClass} h-80 bg-cover bg-center`}>
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