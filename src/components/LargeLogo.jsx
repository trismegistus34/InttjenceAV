import styles from './LargeLogo.module.css';
import logo from '../assets/logo_cropped.png';
import { Link } from 'react-router';


function LargeLogo() {
  return (
    <Link to="/">
        <img className={styles.logo} src={logo}/>
    </Link>
  )
}

export default LargeLogo
