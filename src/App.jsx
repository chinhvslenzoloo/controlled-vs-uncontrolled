import { useSelector } from "react-redux";
import ThemeToggle from "./components/ThemeToggle";

function App(){
    const mode = useSelector((state) => state.theme.mode);

    return(
        <div className={`min-h-screen flex flex-col items-center justify-center gap-6 
            ${mode === "dark" ? "bg-gray-900 text-white":"bg-white text-black" }`}>

                <h1 className="text-3xl font-bold">
                    redux dark /light mode
                </h1>
            <ThemeToggle />

        </div>
    )
}

export default App;