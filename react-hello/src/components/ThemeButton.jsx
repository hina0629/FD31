// rfce
import styles from './ThemeButton.module.css'
// テーマコンテキストをインポート
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from "react";


function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button
            type="button"
            className={styles.button}
            onClick={toggleTheme}>
            <span className={styles.dot} aria-hidden="true" />
            <span>{theme}</span>
        </button>
    )
}

export default ThemeButton
