import {BrowserRouter as Router , NavLink} from 'react-router-dom';
import './Menu.css';
export default function Menu() {

    const classNameText = 'menu__item';
    const classNameActive = `menu__item-active`;
  
    return(
        <Router>
            <nav className="menu">
                <NavLink className={classNameText} activeClassName={classNameActive} to="/" exact>Главная</NavLink>
                <NavLink className={classNameText} activeClassName={classNameActive} to="/drift">Дрифт-такси</NavLink>
                <NavLink className={classNameText} activeClassName={classNameActive} to="/timeattack">Time Attack</NavLink>
                <NavLink className={classNameText} activeClassName={classNameActive} to="/forza">Forza Karting</NavLink>
            </nav>
        </Router>
      )
  }