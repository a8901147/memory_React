import { useState } from "react";
import { useDispatch } from "react-redux";
import { Transition } from "react-transition-group";
import { arrayActions } from "../../store/array";
import classes from "./Card.module.scss";

function Card(props) {
  const [isFreezed, setIsFreezed] = useState(false);
  // console.log(props.FreezeCounter);
  // if (props.FreezeCounter === 2) {
  //   props.FreezeCounterHandler();
  //   setIsFreezed(true);
  // }
  const cardClass = `${classes.card} ${
    props.isMatched || isFreezed ? classes.faceup : ""
  }`;
  let content = props.isMatched || isFreezed ? props.text : "";

  const dispatch = useDispatch();

  const cardHandler = () => {
    console.log(`${props.FreezeCounter}before click`);
    if (props.isMatched || isFreezed || props.FreezeCounter > 1) {
    } else {
      props.onFreezeCounterHandler();
      setIsFreezed(true);
      dispatch(arrayActions.Match({ content: props.text, id: props.id }));
    }
  };

  if (props.FreezeCounter >= 2) {
    setTimeout(function () {
      props.onResetFreezeCounterHandler();
      setIsFreezed(false);
      console.log("readytorest");
    }, 2000);
  }

  return (
    <div className={cardClass} onClick={cardHandler}>
      <Transition
        in={props.isMatched || isFreezed}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <span
            className={classes.textCenter}
            style={{
              opacity: state === "entered" ? 1 : 0,
            }}
          >
            {content}
          </span>
        )}
      </Transition>
    </div>
  );
}

export default Card;
