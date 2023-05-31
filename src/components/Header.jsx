import react from "react";

const Header = ({ setDarkMode }) => {

    const handlemode = () => {
        setDarkMode((prevMode) => !prevMode);
    }

    return (
        <div className="header">
            <h1>Notes</h1>
            <button onClick={handlemode} className="save">Toggle Mode</button>
        </div>
    )
}
export default Header;