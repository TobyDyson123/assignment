import { Link } from "react-router-dom";

function Navbar() {
    const menuClick = () => {
        var elements = document.getElementById("begin-scroll").children;
        for (var i = 0; i < elements.length; i++) {
            var child = elements[i];
            if (child === document.getElementById("menu-icon")) {
                continue;
            }
            if (child.style.display === "none") {
                child.style.display = "block";
            } else {
                child.style.display = "none";
            }
            
        }
    };

    return (
        <div className="nav-container" id="begin-scroll">
            <button id="menu-icon" onClick={menuClick}>Menu -</button>
            <Link to="/explorerecipes">Explore Recipes</Link>
            <Link>Use up your Leftovers</Link>
            <Link>Build Custom Recipes</Link>
        </div>
    );
}

export default Navbar;