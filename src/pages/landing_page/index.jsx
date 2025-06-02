import styles from './index.module.css';
import themes from '../themes.module.css';
import ModelDropdown from '../../components/model_dropdown/ModelDropdown';
import SidebarIcon from '../../components/top_icons/SidebarIcon';
import TopButtons from '../../components/top_icons/TopButtons';
import Sidebar from '../../components/sidebar/Sidebar';
import { useState } from 'react';
import LargeLogo from '../../components/LargeLogo';

function LandingPage() {
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
                <ModelDropdown />
            </div>
        </div>
    );
}

export default LandingPage;