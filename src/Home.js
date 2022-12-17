import Title from './title';
import MainContent from './main-content';
import Footer from './footer';
import ScrollButton from './scrolltotop';
import CollapsibleExample from './test.js';

function Home() {
    return (
        <div className='Home'>
            <Title />
            {/* <Navbar /> */}
            <CollapsibleExample />
            <ScrollButton />      
            <MainContent />
            <Footer />
        </div>
    );
}

export default Home;