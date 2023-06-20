import styled from "styled-components";

type numberChange = {
    numNumberItem: number
}

export const Container = styled.div<numberChange>`
    background-color: #3d3f43;
    padding: 8px;
    height: 135px;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    transition: all ease 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 0.9;
    }

    div {
        @media (max-width: 500px) {
            margin-left: ${props => (props.numNumberItem > 6 ? "15px" : "0px")};
        }
    }

    @media (max-width: 500px) {
        padding: ${props => (props.numNumberItem > 6 ? "5px" : "8px")};
        height: ${props => (props.numNumberItem > 6 ? "60px" : "135px")};
        justify-content: ${props => (props.numNumberItem > 6 ? "start" : "center")};
    }

    @media (max-width: 400px) {
        height: ${props => (props.numNumberItem > 6 ? "55px" : "135px")};
    }

    @media (max-width: 370px) {
        height: ${props => (props.numNumberItem > 6 ? "46px" : "135px")};
    }
`;