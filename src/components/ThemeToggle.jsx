import { useDispatch, useSelector } from "react-redux";
import { ToggleTheme } from "../features/theme/themeSlice";

function ThemeToggle(){
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);

    return(
        <button onClick={() => dispatch(ToggleTheme())} className="px-4 py-2 rounded bg-indigo-600 text white">
                {mode === "light" ? "Dark Mode" : "Light Mode"}

        </button>
    )

}

export default ThemeToggle;