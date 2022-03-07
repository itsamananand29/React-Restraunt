import Input from '../UI/Input/Input';
import styles from './MealItemForm.module.css';
const MealItemForm = props => {
    return (
        <form className={styles.form}>
            <Input input={{
                label : "Amount",
                id:"amount_"+props.id,
                type:"number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue:"1"
            }}/>
            <button>+ ADD</button>
        </form>
    )
}
export default MealItemForm;