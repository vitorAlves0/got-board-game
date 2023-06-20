import * as C from "./styles";

type Props = {
    number: number;
    numNumber: number;
};

export const NumbersItem = ({number, numNumber}: Props) => {
    return (
        <C.Container numNumberItem={numNumber}><div>Casa {number}</div></C.Container>
    );
};