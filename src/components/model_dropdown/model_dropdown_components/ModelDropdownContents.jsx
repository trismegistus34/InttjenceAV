import styles from './ModelDropdownContents.module.css';
import { Link } from 'react-router';

function ModelDropdownContents({ items, open}) {

    if (!open) { 
        return (<></>);
    }
    else {
        return (
            <>
                <ul className={styles.list}>
                    {items && items.length > 0 && items.map((model, index) => 
                        <li key={index}>
                            <Link to={`/chat/${model}`} className={styles.modelLink}>
                            {model}
                            </Link>
                        </li>
                    )}
                </ul>
            </>
        );
    }
}

export default ModelDropdownContents;
