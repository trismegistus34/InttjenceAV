import styles from './LogInButton.module.css';
import { Link } from 'react-router';

function LogInButton() {

  return (
    <Link to="/login">
      <div className = {styles.buttonStyle}>
          Log In
      </div>
    </Link>
  )
}

export default LogInButton
