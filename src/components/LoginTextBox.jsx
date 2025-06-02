import styles from './LoginTextBox.module.css';
import themes from '../pages/themes.module.css';


function LoginTextBox({isDark, type, placeholderText}) {
  return (
    <input 
        className={`${styles.textContainer} ${isDark ? themes.textContainerDark : themes.textContainerLight}`}
        placeholder={placeholderText}
        type={type}
    />
  )
}

export default LoginTextBox
