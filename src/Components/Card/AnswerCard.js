import classes from "./AnswerCard.module.scss";

function AnswerCard(props) {
  return (
    <div className={classes.answerCard}>
      <span className={classes.textCenter}>{props.answer}</span>
    </div>
  );
}

export default AnswerCard;
