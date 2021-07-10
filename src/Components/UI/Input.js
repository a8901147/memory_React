import classes from "./Input.module.scss";

function Input(props) {
  return <input value={props.value} className={classes.input} />;
}

export default Input;
