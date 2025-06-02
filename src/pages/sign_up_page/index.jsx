import styles from './index.module.css';
import themes from '../themes.module.css';
import SidebarIcon from '../../components/top_icons/SidebarIcon';
import TopButtons from '../../components/top_icons/TopButtons';
import Sidebar from '../../components/sidebar/Sidebar';
import { useState } from 'react';
import LargeLogo from '../../components/LargeLogo';
import LoginTextBox from '../../components/LoginTextBox';
import RegisterButton from '../../components/RegisterButton';

function LogInPage() {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen((open) => !open);
    };

    const [isDark, setIsDark] = useState(false);

    const toggleDarkmode = () => {
        setIsDark((isDark) => !isDark);
    };

    return (
        <div className={`${themes.backgroundStyle} ${isDark ? themes.darkTheme : themes.lightTheme}`}>
            <div className = {styles.topNavButtons}>
                <TopButtons />
                <Sidebar toggle = {toggleSidebar} open = {open} toggleDarkmode = {toggleDarkmode} isDark = {isDark}/>
                <SidebarIcon toggle = {toggleSidebar}/>
            </div>
            <div className = {styles.container}>
                <LargeLogo />
                <div className = {styles.textBoxContainer}>
                    <div>Username:</div>
                    <LoginTextBox isDark={isDark} type="text" placeholderText="Create username"/>
                </div>
                <div className = {styles.textBoxContainer}>
                    <div>Email:</div>
                    <LoginTextBox isDark={isDark} type="text" placeholderText="Introduce email"/>
                </div>
                <div className = {styles.textBoxContainer}>
                    <div>Password:</div>
                    <LoginTextBox isDark={isDark} type="password" placeholderText="Create password"/>
                </div>
                <div className = {styles.textBoxContainer}>
                    <div>Confirm Password:</div>
                    <LoginTextBox isDark={isDark} type="password" placeholderText="Confirm password"/>
                </div>
                <RegisterButton text="Sign Up!" />
            </div>
        </div>
  )
};

export default LogInPage
