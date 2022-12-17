import CollapsibleExample from "./test.js";
import Footer from './footer.js';

function CustomRecipes() {
    return(
        <div className="custom-recipes">
            <CollapsibleExample />
            <h1 style={{minHeight: "100vh"}}>COMING SOON</h1>
            <Footer />
        </div>
    );
}

export default CustomRecipes;