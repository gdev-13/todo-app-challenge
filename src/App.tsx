import ToDoHeader from "./components/ToDoHeader";

function App() {
    return (
        <main className="bg-dark-navy-950 h-screen">
            <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
                <ToDoHeader />
            </div>
        </main>
    )
}

export default App;