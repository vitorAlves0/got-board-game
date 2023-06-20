import starkSvg from "../svg/stark.svg";
import baratheonSvg from "../svg/baratheon.svg";
import lannisterSvg from "../svg/lannister.svg";
import greyjoySvg from "../svg/greyjoy.svg";
import tyrellSvg from "../svg/tyrell.svg";
import martellSvg from "../svg/martell.svg";
import arrynSvg from "../svg/arryn.svg";
import targaryenSvg from "../svg/targaryen.svg";
import { House } from "../types/House";

export const houseList: House[] = ([
    {name: "Stark", svg: starkSvg},
    {name: "Baratheon", svg: baratheonSvg},
    {name: "Lannister", svg: lannisterSvg},
    {name: "Greyjoy", svg: greyjoySvg},
    {name: "Tyrell", svg: tyrellSvg},
    {name: "Martell", svg: martellSvg},
    {name: "Arryn", svg: arrynSvg},
    {name: "Targaryen", svg: targaryenSvg}
  ]);
