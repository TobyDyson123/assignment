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
                    Get Baking! is an organisation who are on a mission
                    to get more people to bake at home. So if you are interested
                    in baking or want to learn more about the exciting recipes
                    available then look no further!
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