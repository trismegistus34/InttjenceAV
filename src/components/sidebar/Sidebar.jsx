import styles from './Sidebar.module.css';
import SidebarContent from './SidebarContent';
import SidebarCloseIcon from './SidebarCloseIcon';

function Sidebar({toggle, open, toggleDarkmode, isDark}) {
  return (
    <div className={`${styles.sidebar} ${open ? null : styles.sidebarInactive}`}>
        <SidebarCloseIcon toggle={toggle} />
        <SidebarContent toggleDarkmode = {toggleDarkmode} isDark = {isDark}/>
    </div>
  )
}

export default Sidebar
