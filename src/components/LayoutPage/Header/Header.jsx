import { NavLink } from 'react-router-dom';
import css from './Header.module.css'
import { useEffect, useState } from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import Modal from '../../Modal/Modal';

const Header = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);
        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    return (
        <header>
            <div className={css.headerContainer}>
                <div className={css.header_wrapper}>
                    <div className={css.logoWrapper}>
                        <NavLink to="/binance/">
                            <div className={css.logoContainer}>
                                <div>
                                    <div className={css.vec}></div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    {(screenWidth > 1024) ? (
                        <>
                            <nav className={css.navWrapper}>
                                <ul className={css.list_table}>
                                    <li className={css.list_item}>
                                        <NavLink to='/binance/'>Buy Crypto</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/binance/'>Finance</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/binance/'>Wallet</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/binance/'>Cryptocurrency</NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <div className={css.loginWrapper}>
                                <div className={css.login}>
                                    <button className={css.loginBtn}>Login</button>
                                </div>
                                <div className={css.registration}>
                                    <button className={css.registrationBtn}>Registration</button>
                                </div>
                            </div>
                        </>
                    ) :
                        <>
                            <button className={css.btnIcon} onClick={() => setOpen(!open)}>
                                <BiMenuAltRight className={css.icon} />
                            </button>
                        </>
                    }
                </div>
                {
                    open && <Modal open={open} setOpen={setOpen} />
                }
            </div>
        </header>
    )
}

export default Header;