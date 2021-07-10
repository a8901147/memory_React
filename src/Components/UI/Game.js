import Header from "../Layout/Header";
import Card from "../Card/Card";
import Board from "../UI/Board";
import React, { useState } from "react";
import AnswerCard from "../Card/AnswerCard";
import GameSetting from "../Layout/GameSetting";

function Game(props) {
  let [freezeCounter, setFreezeCounter] = useState(0);
  const FreezeCounterHandler = () => {
    setFreezeCounter(++freezeCounter);
    console.log("FreezeCounterHandler++");
  };

  console.log(freezeCounter);
  const ResetFreezeCounterHandler = () => {
    setFreezeCounter(0);
    console.log("ResetFreezeCounter=0");
  };

  const [startGame, setStartGame] = useState(false);
  const startGameHandler = () => {
    setStartGame(true);
  };
  // const [test, setTest] = useState(false);
  // const testHandler = () => {
  //   setTest((v) => !v);
  // };
  // console.log(test);
  return (
    <React.Fragment>
      {/* <button onClick={testHandler}></button> */}
      <Header />
      {!startGame && (
        <Board>
          <GameSetting
            onStartGame={startGameHandler}
            stringSetting={props.array.stringSetting}
          />
        </Board>
      )}
      {startGame && (
        <Board>
          {props.array.arrayDetail.map((item) => (
            <Card
              text={item.content}
              key={item.id}
              id={item.id}
              isMatched={item.isMatched}
              onFreezeCounterHandler={FreezeCounterHandler}
              FreezeCounter={freezeCounter}
              onResetFreezeCounterHandler={ResetFreezeCounterHandler}
            ></Card>
          ))}
          {!!props.array.answer && <AnswerCard answer={props.array.answer} />}
        </Board>
      )}
    </React.Fragment>
  );
}

export default Game;
