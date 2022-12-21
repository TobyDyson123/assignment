import Title from './title';
import MainContent from './main-content';
import Footer from './footer';
import ScrollButton from './scrolltotop';
import CollapsibleExample from './test.js';

function Home() {
    window.scrollTo({top: 0, behavior: "auto"});
    return (
        <div className='Home'>
            <CollapsibleExample />
            <Title />
            <div id="begin-scroll" style={{visibility: "hidden"}}></div>
            <ScrollButton />      
            <MainContent />
            <Footer />
        </div>
    );
}

export default Home;