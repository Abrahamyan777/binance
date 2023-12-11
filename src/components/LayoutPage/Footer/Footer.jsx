import { BiRegistered } from 'react-icons/bi';
import css from './Footer.module.css'
import { FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';
import { FiFacebook, FiTwitter } from 'react-icons/fi';


const Footer = () => {
    return (
        <footer>
            <div className={css.footerContainer}>
                <div className={css.footerWrapperInner}>
                    <div className={css.leftBlock}>
                        <div className={css.topBlock}>
                            <nav className={css.leftMenu}>
                                <ul>
                                    <li>Announcements</li>
                                    <li>Legal</li>
                                    <li>Cryptocurrency</li>
                                    <li>Terms</li>
                                    <li>Privacy</li>
                                </ul>
                            </nav>
                            <nav className={css.rightMenu}>
                                <ul>
                                    <li>About </li>
                                    <li>Business Contacts</li>
                                    <li>Contact us</li>
                                    <li>FAQ</li>
                                    <li>Careers</li>
                                </ul>
                            </nav>
                        </div>
                        <div className={css.bottomBlock}>
                            <h5 className={css.bottomTitle}>Binance© 2023Cookie Preferences</h5>
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                        </div>
                    </div>
                    <div className={css.rightBlock}>
                        <div className={css.footerLogo}></div>
                        <span className={css.platformFooter}>crypto platform</span>
                        <div className={css.menuIcon}>
                            <div className={css.menuIconInner}>
                                <ul>
                                    <li><FiFacebook /></li>
                                    <li><FaInstagramSquare /></li>
                                    <li><FaLinkedin /></li>
                                    <li><FaYoutubeSquare /></li>
                                    <li><FiTwitter /></li>
                                    <li><BiRegistered /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;