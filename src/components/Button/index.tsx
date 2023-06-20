import * as C from "./styles";

type Props = {
    nameBtn: string,
    functBtn: () => void;
};

export const Button = ({nameBtn, functBtn}: Props) => {
    return (
        <C.Container onClick={functBtn}>
            {nameBtn}
        </C.Container>
    );
};