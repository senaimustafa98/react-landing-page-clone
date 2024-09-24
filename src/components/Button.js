import styles from './Button.module.css';

export default function Button({ children, color, large, buttonDark }) {
  return (
    <a href="/" style={{ '--color': color }}  className={`${large ? styles.buttonLarge : ''} ${buttonDark ? styles.buttonDark : styles.buttonPink}`}
    >{children}</a>
  )
}
