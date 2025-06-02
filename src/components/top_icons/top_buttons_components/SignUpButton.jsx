import styles from './SignUpButton.module.css';
import { Link } from 'react-router';

function SignUpButton() {

    return (
        <Link to="/signup">
            <div className = {styles.buttonStyle}>
                Sign Up
            </div>
        </Link>
    )
}

export default SignUpButton
