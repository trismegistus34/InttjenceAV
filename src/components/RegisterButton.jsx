import styles from './RegisterButton.module.css';

function RegisterButton({text}) {
  return (
    <div className={styles.buttonStyle}>
        {text}
    </div>
  )
}

export default RegisterButton
