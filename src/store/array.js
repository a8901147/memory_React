import { createSlice } from "@reduxjs/toolkit";

//const cardString = "You Are Only A Piece Of Shit 🤎";
//const cardStringArray = (cardString + " " + cardString).split(" ");

function stringToArray(value) {
  var twoString = value + " " + value;
  return twoString.split(" ");
}
//const importArray = shuffle(cardStringArray);

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  const arrayWithKey = [];
  for (let index = 0; index < array.length; index++) {
    arrayWithKey.push({
      content: array[index],
      id: index,
      isMatched: false,
    });
  }
  return arrayWithKey;
}

const initialArrayState = {
  stringSetting: "",
  cardStringArray: "",
  arrayDetail: "",
  matchingArray: [],
  completed: 0,
  answer: "",
};

const arraySlice = createSlice({
  name: "arrayMatching",
  initialState: initialArrayState,
  reducers: {
    Match(state, action) {
      state.matchingArray.push(action.payload);
      if (state.matchingArray.length === 2) {
        if (state.matchingArray[0].content === state.matchingArray[1].content) {
          state.arrayDetail[state.matchingArray[0].id].isMatched = true;
          state.arrayDetail[state.matchingArray[1].id].isMatched = true;
          state.completed += 2;
          if (state.completed === state.cardStringArray.length) {
            state.answer = state.stringSetting;
            console.log("finish");
            console.log(state.answer);
          }
          console.log("ok");
        } else {
          state.arrayDetail[state.matchingArray[0].id].isMatched = false;
          state.arrayDetail[state.matchingArray[1].id].isMatched = false;
          console.log("removeBoth");
        }
        state.matchingArray = [];
      } else {
        // state.arrayDetail[action.payload.id].isMatched = true;
      }
    },
    assignNewString(state, action) {
      state.stringSetting = action.payload;
      state.cardStringArray = stringToArray(action.payload);
      state.arrayDetail = shuffle(stringToArray(action.payload));
    },
    // test(state) {
    //   state.testState = "1";
    //   console.log("test");
    //   console.log(state.testState);
    //   state.testState = "2";
    //   console.log(state.testState);
    // },
  },
});

export const arrayActions = arraySlice.actions;

export default arraySlice.reducer;
