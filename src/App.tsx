import * as C from "./App.styles";
import { useState } from "react";
import { Button } from "./components/Button";
import { HouseItem } from "./components/HouseItem";
import { NumbersItem } from "./components/NumbersItem";
import {houseList} from "./data/items";
import { InputItem } from "./components/InputItem";
import { House } from "./types/House";

const App = () => {

  const [change, setChange] = useState(true);
  const [sorting, setSorting] = useState(false);
  const [inputing, setInputing] = useState(true);
  const [houseMist, setHouseMist] = useState<House[]>([]);
  const [numMist, setNumMist] = useState<number[]>([]);

  const handleValue = (number: number) => {
    if(number > 2 && number <= houseList.length) {
      let housePlay: House[] = [];
      for(let i = 0; i < number; i++) {
        housePlay.push(houseList[i]);
      };

      let numbers: number[] = [];
      for(let i = 1; i <= housePlay.length; i++) {
          numbers.push(i);
      };
      
      setNumMist(numbers);
      setHouseMist(housePlay);
      setInputing(false);

    } //else {
      //alert("Numero de jogadores inválido...");
      //};
  };

  const handleChange = () => {
    if(change === true) {
      setChange(false);
    } else {
      setChange(true);
    }
  };

  const handleSort = () => {

    let randomNumber;
    let tmp;

    for(let i = houseMist.length; i;) {
      randomNumber = Math.random() * i-- | 0;
      tmp = houseMist[randomNumber];
      houseMist[randomNumber] = houseMist[i];
      houseMist[i] = tmp;
    };

    setSorting(true);
    setTimeout(() => {
      setSorting(false);
    }, 3000);
  };

  const handleOut = () => {
    alert("Esconda as casas para acessar essa função.");
  };

  const handleBackGame = () => {
    setInputing(true);
  };

  return (
    <C.Container>
      <C.Area>

      {!inputing &&
      <>
        {!sorting &&
          <>
          <C.Header>Escolha sua Casa</C.Header>
          
          <C.Buttons>
            <Button nameBtn={change ? "Exibir" : "Esconder"} functBtn={handleChange}/>
            <Button nameBtn={"Sortear"} functBtn={change ? handleSort : handleOut}/>
          </C.Buttons>

            <C.HouseArea changeGrid={numMist.length}>
            {!change &&
              houseMist.map((item, index) => (
                <HouseItem key={index} house={item.name} svg={item.svg} numHouse={numMist.length}/>
              ))
            }

            {change &&
              numMist.map((item, index) => (
                <NumbersItem key={index} number={item} numNumber={numMist.length} />
              ))
            }
          </C.HouseArea>

          <C.Footer>
            <div onClick={handleBackGame} className="backGame">Reiniciar Casas</div>
            <footer>Developed by Vitor A.C</footer>
          </C.Footer>

          </>
        }

        {sorting &&
          <C.Sorting>
            <div className="emoji">⌛</div>
            <div className="txt">Sorteando Casas...</div>
          </C.Sorting>
        }
      </>
      }

      {inputing &&
        <C.Input>
          <InputItem onFunct={handleValue}/>
        </C.Input>
      }

      </C.Area>
    </C.Container>
  );
};

export default App;
