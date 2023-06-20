import * as C from "./styles";

type Props = {
    house: string;
    svg: string;
    numHouse: number;
};

export const HouseItem = ({house, svg, numHouse}: Props) => {

    return (
        <C.Container numHouseItem={numHouse}>
            <img src={svg} alt="" />
            {house}
        </C.Container>
    );
};