import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';
const Cart = props=>{
    const cartItems = [{id:'c1',name:"Sushi",amount:2,price:12.99}].map(item=><li key={item.id}>{item.name}</li>);
    return(
        <Modal>
            <ul className={styles['cart-items']}>
                {cartItems}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.59</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={styles.button} onClick={props.onHideCart}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;