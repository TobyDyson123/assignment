import logo_white from './images/logo-white.png';

function Footer() {
    return (
        <div className="footer">
            <div className="social-media-container">
                <h2>Connect with us on Social Media to discover new recipes</h2>
                <a href='https://www.instagram.com/' target="_blank"><i id="instagram" className="fa-brands fa-instagram"></i></a>
                <a href='https://en-gb.facebook.com/' target="_blank"><i id="facebook" className="fa-brands fa-square-facebook"></i></a>
                <a href='https://twitter.com/' target="_blank"><i id="twitter" className="fa-brands fa-square-twitter"></i></a>
                <img src={logo_white} className="logo-white" alt='get baking logo in white'></img>
            </div>
        </div>
    );
}

export default Footer;