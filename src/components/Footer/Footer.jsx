import "./Footer.scss";


export default function Footer() {
    return (
        <div className="footer">
            <h1 className="footer__title">Snaps</h1>
            <div className="footer__parent">
            <div className="footer__section">
                <a className="footer__section--link">For photographers</a>
                <a className="footer__section--link" href="">Hire talent</a>
                <a className="footer__section--link" href="">Inspiration</a>
            </div>
            <div className="footer__section">
                <a className="footer__section--link" href="">About</a>
                <a className="footer__section--link" href="">Careers</a>
                <a className="footer__section--link" href=""> Support</a>
            </div>
            </div>
            <div className="footer__socials">
                <img className="footer__socials--link" src="../../src/assets/images/Facebook.svg" alt="" />
                <img className="footer__socials--link" src="../../src/assets/images/X_twitter.svg" alt="" />  
                <img className="footer__socials--link" src="../../src/assets/images/Instagram.svg" alt="" />
                <img className="footer__socials--link" src="../../src/assets/images/Pinterest.svg" alt="" />
                
            </div>
            <div className="footer__info">
                <p className="footer__info--links">© 2024 Snaps</p>
                <p className="footer__info--links">Terms</p>
                <p className="footer__info--links">Privacy</p>
                <p className="footer__info--links">Cookies</p>
            </div>
         
        </div>
    );
}

