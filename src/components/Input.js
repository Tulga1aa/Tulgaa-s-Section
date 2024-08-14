import styles from "./Input.module.css";

export const Input = (props) => {
  const { placeholder } = props;
  return <input className={styles.input} placeholder={placeholder} />;
};
