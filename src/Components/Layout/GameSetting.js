import classes from "./GameSetting.module.scss";
import Input from "../UI/Input";
import Button from "../UI/Button";
import React, { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { arrayActions } from "../../store/array";

function GameSetting(props) {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const stringSettingHandler = () => {
    if (inputRef.current.value !== "") {
      dispatch(arrayActions.assignNewString(inputRef.current.value));
      props.onStartGame();
    }
  };

  const resetHandler = () => {};
  return (
    <Fragment>
      <form className={`${classes["form"]}`}>
        <article className={`${classes["l-design-width"]}`}>
          <div className={`${classes["card"]} ${classes["card--accent"]}`}>
            <h2 className={`${classes["h2Space"]}`}>
              <svg className={`${classes["icon"]}`} aria-hidden="true">
                <use xlinkHref="#icon-coffee" href="#icon-coffee" />
              </svg>
              Café con leche
            </h2>
            <label className={`${classes["input"]}`}>
              <input
                className={`${classes["input__field"]}`}
                type="text"
                placeholder=" "
                ref={inputRef}
              />
              <span className={`${classes["input__label"]}`}>
                Watermelon sugar high !!
              </span>
            </label>

            <div className={`${classes["button-group"]}`}>
              <Button onClick={stringSettingHandler}>Send</Button>
              <Button type="reset" onClick={resetHandler}>
                Reset
              </Button>
            </div>
          </div>
        </article>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${classes["hidden"]}`}
        >
          <symbol id="icon-coffee" viewBox="0 0 20 20">
            <title>icon-coffee</title>
            <path
              fill="currentColor"
              d="M15,17H14V9h3a3,3,0,0,1,3,3h0A5,5,0,0,1,15,17Zm1-6v3.83A3,3,0,0,0,18,12a1,1,0,0,0-1-1Z"
            />
            <rect
              fill="currentColor"
              x="1"
              y="7"
              width="15"
              height="12"
              rx="3"
              ry="3"
            />
            <path
              fill="var(--color-accent)"
              d="M7.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,0,1-1.79.89Z"
            />
            <path
              fill="var(--color-accent)"
              d="M3.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"
            />
            <path
              fill="var(--color-accent)"
              d="M11.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"
            />
          </symbol>
        </svg>
      </form>
    </Fragment>
  );
}

export default GameSetting;
