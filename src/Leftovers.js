import CollapsibleExample from "./test.js";
import Footer from './footer.js';

function Leftovers() {
    window.scrollTo({top: 0, behavior: "auto"});
    return (
        <div className="leftovers">
            <CollapsibleExample />
            <h1 style={{minHeight: "100vh"}}>COMING SOON</h1>
            <Footer />
        </div>
    );
}

export default Leftovers;