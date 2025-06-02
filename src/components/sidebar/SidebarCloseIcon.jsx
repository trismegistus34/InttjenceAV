import styles from './SidebarCloseIcon.module.css';
import { IoIosClose } from "react-icons/io";

function SidebarCloseIcon({toggle}) {
  return (
    <div className = {styles.buttonStyle} onClick={toggle}>
        <IoIosClose size = {70}/>
    </div>
  )
}

export default SidebarCloseIcon
