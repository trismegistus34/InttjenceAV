import styles from './ModelDropdown.module.css';
import ModelDropdownButton from './model_dropdown_components/ModelDropdownButton';
import ModelDropdownContents from './model_dropdown_components/ModelDropdownContents';
import { useState } from 'react';


function ModelDropdown() {
    const models = ["ChatGPT", "DeepSEEK"];
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen((open) => !open);
    };

    return (
        <div className={styles.listContainer}>
            <ModelDropdownButton toggle={toggleDropdown} open={open} />
            <ModelDropdownContents items = {models} open={open}/>
        </div>
    );
}

export default ModelDropdown;