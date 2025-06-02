import styles from './ModelDropdownButton.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function ModelDropdownButton({ toggle, open }) {
    return (
            <div onClick = {toggle} className={`${styles.listHeader} ${open ? styles.buttonOpen : styles.buttonClosed}`}>
                Choose Your Model
                <span className={styles.toggleIcon}>
                    {open ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </div>
    );
}

export default ModelDropdownButton;