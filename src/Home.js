import Title from './title';
import MainContent from './main-content';
import Navbar from './navbar';
import Footer from './footer';
import ScrollButton from './scrolltotop';

function Home() {
    return (
        <div className='Home'>
            <Title />
            <Navbar />
            <ScrollButton />      
            <MainContent />
            <Footer />
        </div>
    );
}

export default Home;