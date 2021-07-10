import classes from "./Board.module.css";

function Board(props) {
  return <div className={classes.boardContainer}>{props.children}</div>;
}

export default Board;
