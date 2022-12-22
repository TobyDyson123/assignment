import { Outlet } from "react-router-dom";
import Footer from "./footer";
import CollapsibleExample from "./test";

function ExploreRecipes() {
    window.scrollTo({top: 0, behavior: "auto"});
    return (
        <div>
            <CollapsibleExample/>
            <Outlet />
            <Footer />
        </div>
    );
}

export default ExploreRecipes;