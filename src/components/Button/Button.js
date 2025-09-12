import styles from './Button.module.scss';

const Button = ({ children, className, loading = false, ...rest }) => {

  let buttonClassName = styles.button;

  if (className ) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  if (loading) {
    buttonClassName = `${buttonClassName} ${styles.loading}`;
  }

  return (
    <button {...rest} className={buttonClassName} disabled={loading || rest.disabled}>
      {loading ? (
        <span className={styles.spinner}></span>
      ) : (
        children
      )}
    </button>
  )
}

export default Button;