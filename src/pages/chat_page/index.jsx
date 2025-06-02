import styles from './index.module.css';
import themes from '../themes.module.css';
import { useParams } from 'react-router';
import logo from '../../assets/logo_cropped.png';
import { Link } from 'react-router';
import SidebarIcon from '../../components/top_icons/SidebarIcon';
import TopButtons from '../../components/top_icons/TopButtons';
import Sidebar from '../../components/sidebar/Sidebar';
import { useState } from 'react';


function ChatPage() {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen((open) => !open);
    };

    const [isDark, setIsDark] = useState(false);

    const toggleDarkmode = () => {
        setIsDark((isDark) => !isDark);
    };

    const {model} = useParams();

    const messages = [
        {
            role: "user",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
        },
        {
            role: "model",
            content: "hello there"
        },
        {
            role: "user",
            content: "everything good?"
        }
    ];

    const handleFormMessage = (event) =>
    {
        event.preventDefault();
    }

    return (
        <div className={`${styles.container} ${isDark ? themes.darkTheme : themes.lightTheme}`}>
            <div className={styles.headerContainer}>
                <Link to="/" className={styles.logoContainer}>
                    <img className={styles.logo} src={logo} alt="App Logo" />
                </Link>
                <div className={styles.rightControls}>
                    <TopButtons />
                    <Sidebar toggle={toggleSidebar} open={open} toggleDarkmode={toggleDarkmode} isDark={isDark} />
                    <SidebarIcon toggle={toggleSidebar} />
                </div>
            </div>

            <div className={styles.messagesContainer}>
                {
                    messages && messages.length > 0 && messages.map(message => 
                        <div className={`${styles.message} ${message.role === 'user' ? styles.userMessage : styles.modelMessage}`}>
                            {message.content}
                        </div>
                    )
                }
            </div>

            <div className={styles.inputContainer}>
                <form className={styles.inputForm} onSubmit={handleFormMessage}>
                    <textarea 
                        className={`${styles.textContainer} ${isDark ? themes.textContainerDark : themes.textContainerLight}`}
                        placeholder="Please write your message here..."
                        rows={5}
                    />

                    <button className={styles.sendButton}>Ask!</button>
                </form>
            </div>
        </div>
    );
}

export default ChatPage;