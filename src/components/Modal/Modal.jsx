import { NavLink } from 'react-router-dom';
import css from './Modal.module.css'
import { FiX } from "react-icons/fi";

const Modal = (props) => {

    return (
        <aside className={css.modalWrapper} onClick={() => props.setOpen(!props.open)}>
            <nav className={css.menu}  >
                <div className={css.menuTitle}>
                    <h4 className={css.title}>Menu</h4>
                    <button className={css.closeIcon} ><FiX  /></button>
                </div>
                <div className={css.menuBody}>
                    <ul>
                        <li >
                            <NavLink to='/binance/' >Buy Crypto</NavLink>
                        </li>
                        <li>
                            <NavLink to='/binance/' >Finance</NavLink>
                        </li>
                        <li>
                            <NavLink to='/binance/' >Wallet</NavLink>
                        </li>
                        <li>
                            <NavLink to='/binance/' >Cryptocurrency</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Modal;