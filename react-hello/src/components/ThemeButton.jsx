import styles from "./ThemeButton.module.css";

function ThemeButton() {
  return (
    <div>
      <button type="button" className={styles.button}>
        <span className={styles.dot} aria-hidden="true" />
        <span>Light</span>
      </button>
    </div>
  );
}

export default ThemeButton;
