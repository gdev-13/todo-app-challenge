import IconSun from '/images/icon-sun.svg'

function ToDoHeader() {
    return (
        <header className="flex justify-between max-w-175 m-auto mb-6 pt-20">
            <h1 className='text-white text-[2.5rem] font-bold tracking-[1rem]'>TODO</h1>
            <button>
                <img className="w-8 h-8" src={IconSun} alt="Alternar tema"></img>
            </button>
        </header>
    )
};

export default ToDoHeader;