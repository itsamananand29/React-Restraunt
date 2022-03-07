import {Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
import Meals from "../../Meals/Meals";
import styles from './Header.module.css';
import mainImage from '../../../assets/meals.jpg';
const Header = props=>{
    return(
        <Fragment>
            <header className={styles.header}>
                <h1>React Restraunt</h1>
                <HeaderCartButton showCart={props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mainImage} alt="Background"/>
            </div>
            <Meals/>
        </Fragment>
    )
}
export default Header;