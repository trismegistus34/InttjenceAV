import styles from './SidebarIcon.module.css';
import { FiAlignRight } from "react-icons/fi";

function SidebarIcon({toggle}) {

    return (
        <span className={styles.buttonStyle} onClick={toggle}>
            <FiAlignRight size={40}/>
        </span>
    )
}

export default SidebarIcon
