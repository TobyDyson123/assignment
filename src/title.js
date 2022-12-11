import logo_black from './images/logo-black.png';

function Title() {
    const handleClickScroll = () => {
        const element = document.getElementById('begin-scroll');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div className="title-container">
            <div className="logo-container">
                <img className="logo" src={logo_black} alt="get baking logo"></img>
            </div>
            <div className="about-container">
                <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam maximus ornare felis, eu lobortis odio. 
                    Integer eget semper arcu, sit amet tincidunt mi. 
                    Nulla tortor erat, tristique at vestibulum sit amet, vestibulum ut felis. 
                    Nulla accumsan sapien vitae felis lacinia commodo. 
                    Nulla justo sem, placerat nec tempor at, vulputate non urna. 
                    Nunc id pellentesque ligula. Mauris euismod arcu at enim imperdiet, sit amet blandit neque cursus. 
                </p>
            </div>
            <div className="begin-button-container">
                <button className="begin-button" onClick={handleClickScroll}>Let's Begin</button>
            </div>
            {/*<div class="mouse_scroll">
                <div class="mouse">
                <div class="wheel"></div>
            </div>*/}
            <div className="mouse_scroll">
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
            </div>
        </div>
    );
}

export default Title;