import { Outlet } from "react-router-dom";
import Footer from "./footer";
import CollapsibleExample from "./test";

function ExploreRecipes() {
    return (
        <div>
            <CollapsibleExample/>
            <Outlet />
            <Footer />
        </div>
    );
}

export default ExploreRecipes;