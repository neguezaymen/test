import { CssBaseline } from "@mui/material";
import "./styles.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";

const combinaisons = [
  ["one", "two", "three"],
  ["four", "five", "six"],
  ["seven", "eight", "nine"],
  ["one", "four", "seven"],
  ["two", "five", "eight"],
  ["three", "six", "nine"],
  ["one", "five", "nine"],
  ["three", "five", "seven"],
];

const init = {
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
  six: "",
  seven: "",
  eight: "",
  nine: "",
};

const checkWin = (cells, turn) => {
  const mark = !turn ? "circle" : "X";
  let win = false;
  combinaisons.forEach((combinaison) => {
    if (
      cells[combinaison[0]] === mark &&
      cells[combinaison[1]] === mark &&
      cells[combinaison[2]] === mark
    ) {
      win = true;
      return;
    }
  });
  return win;
};
function App() {
  const [time, setTime] = useState("");
  const [turn, setTurn] = useState(false);
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [cells, setCells] = useState(init);

  useEffect(() => {
    if (checkWin(cells, turn)) {
      if (!turn) {
        setPlayer2(player2 + 1);
      } else {
        setPlayer1(player1 + 1);
      }
      setTurn(false);
      setCells(init);
      alert("Bravo");
      return;
    }
    if (!Object.values(cells).includes("")) {
      alert("match nul");
      setTurn(false);
      setCells(init);
    }
  }, [cells]);

  useEffect(() => {
    let departMinutes = 3;
    let temps = departMinutes * 60;

    setInterval(() => {
      let minutes = parseInt(temps / 60, 10);
      let secondes = parseInt(temps % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      secondes = secondes < 10 ? "0" + secondes : secondes;

      setTime(`${minutes}:${secondes}`);
      temps = temps <= 0 ? 0 : temps - 1;
    }, 1000);
  }, []);

  const handleClick = (e) => {
    setCells((prev) => {
      if (prev[e.target.getAttribute("name")]) return prev;
      setTurn((prev) => !turn);
      return {
        ...prev,
        [e.target.getAttribute("name")]: turn ? "circle" : "X",
      };
    });
  };

  return (
    <div className="App">
      <CssBaseline />
      <div className="container">
        <div className="board" id="board">
          <div onClick={handleClick} name="one" className="cell">
            {cells.one === "circle" ? (
              <CircleOutlinedIcon />
            ) : cells.one === "X" ? (
              <CloseOutlinedIcon />
            ) : (
              ""
            )}
          </div>
          <div onClick={handleClick} name="two" className="cell">
            {cells.two === "circle" ? (
              <CircleOutlinedIcon />
            ) : cells.two === "X" ? (
              <CloseOutlinedIcon />
            ) : (
              ""
            )}
          </div>
          <div onClick={handleClick} name="three" className="cell">
            {cells.three === "circle" ? (
              <CircleOutlinedIcon />
            ) : cells.three === "X" ? (
              <CloseOutlinedIcon />
            ) : (
              ""
            )}
          </div>
          <div onClick={handleClick} name="four" className="cell">
            {cells.four === "circle" ? (
              <CircleOutlinedIcon />
            ) : cells.four === "X" ? (
              <CloseOutlinedIcon />
            ) : (
              ""
            )}
          </div>
          <div onClick={handleClick} name="five" className="cell">
            {cells.five === "circle" ? (
              <CircleOutlinedIcon />
            ) : cells.five === "X" ? (
              <CloseOutlinedIcon />
            ) : (
              ""
            )}
          </div>
          <div onClick={handleClick} name="six" className="cell">
            {cells.six === "circle" ? (
              <CircleOutlinedIcon />
            ) : cells.six === "X" ? (
              <CloseOutlinedIcon />
            ) : (
              ""
            )}
          </div>
          <div onClick={handleClick} name="seven" className="cell">
            {cells.seven === "circle" ? (
              <CircleOutlinedIcon />
            ) : cells.seven === "X" ? (
              <CloseOutlinedIcon />
            ) : (
              ""
            )}
          </div>
          <div onClick={handleClick} name="eight" className="cell">
            {cells.eight === "circle" ? (
              <CircleOutlinedIcon />
            ) : cells.eight === "X" ? (
              <CloseOutlinedIcon />
            ) : (
              ""
            )}
          </div>
          <div onClick={handleClick} name="nine" className="cell">
            {cells.nine === "circle" ? (
              <CircleOutlinedIcon />
            ) : cells.nine === "X" ? (
              <CloseOutlinedIcon />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="result">
          <div className="time">{time}</div>
          <div className="players">
            <div className="player">
              <span>
                <ArrowForwardIcon />
              </span>
              Player 1 : <span>{player1}</span>
            </div>
            <div className="player">
              <span>
                <ArrowForwardIcon />
              </span>
              Player 2 : <span>{player2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
