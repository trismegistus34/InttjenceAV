import styles from './SidebarContent.module.css';
import DarkModeToggle from './sidebar_content_components/DarkModeToggle';

function SidebarContent({toggleDarkmode, isDark}) {
  return (
    <div className={styles.contentStyle}>
        <DarkModeToggle toggle = {toggleDarkmode} isDark = {isDark} />
        <div>Log in to view user options</div>
    </div>
  )
}

export default SidebarContent
