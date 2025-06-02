import styles from './TopButtons.module.css';
import LogInButton from './top_buttons_components/LogInButton';
import SignUpButton from './top_buttons_components/SignUpButton';

function TopButtons() {
  return (
    <div className = {styles.buttonContainer}>
        <SignUpButton />
        <LogInButton />
    </div>
  )
}

export default TopButtons
