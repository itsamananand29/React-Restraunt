import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
const HeaderCartButton = props=>{
    return(
        <button className={styles.button} onClick={props.showCart}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Cart</span>
            <span className={styles.badge}>3</span>
        </button>
        
    )
}
export default HeaderCartButton;