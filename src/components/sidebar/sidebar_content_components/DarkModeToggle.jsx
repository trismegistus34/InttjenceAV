import styles from './DarkModeToggle.module.css';

function DarkModeToggle({toggle, isDark}) {
  return (
    <div className = {styles.toggleContainer}>
        <div>Change Theme: </div>
        <div className = {styles.buttonStyle} onClick={toggle}>
            {isDark ? "Light" : "Dark"}
        </div>
    </div>
  )
}

export default DarkModeToggle
