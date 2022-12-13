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
            <button>Explore Recipes</button>
            <button>Use up your Leftovers</button>
            <button>Build Custom Recipes</button>
        </div>
    );
}

export default Navbar;