import { ChangeEvent, useState } from "react";
import * as C from "./styles";

type Props = {
    onFunct: (number: number) => void;
}

export const InputItem = ({onFunct}: Props) => {

    const [value, setValue] = useState<number>(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value));
    }

    const handleClick = () => {
        onFunct(value);
        setValue(0);
    }

    return (
        <C.Container>
            <label>Quantos Jogadores?</label>
            <input type="number" value={value === 0 ? "" : value} onChange={handleChange} placeholder="Min. 3 | Máx. 8"/>
            <button onClick={handleClick}>Começar</button>
        </C.Container>
    );
};