// import { useDispatch } from "react-redux";
// import { arrayActions } from "./store/array";
import { useSelector } from "react-redux";
import Game from "./Components/UI/Game";

function App() {
  const array = useSelector((state) => state.array);

  return <Game array={array} />;
}

export default App;
