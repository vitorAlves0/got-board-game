import styled from "styled-components";

type numberChange = {
    numNumberItem: number
}

export const Container = styled.div<numberChange>`
    background-color: #3d3f43;
    padding: 63px;
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

    @media (max-width: 500px) {
        padding: ${props => (props.numNumberItem > 6 ? "18px" : "10px")};
        text-align: ${props => (props.numNumberItem > 6 ? "start" : "center")};
        height: ${props => (props.numNumberItem > 6 ? "" : "120px")};
        justify-content: ${props => (props.numNumberItem > 6 ? "start" : "center")};
        align-items: ${props => (props.numNumberItem > 6 ? "none" : "center")};
    }

    @media (max-width: 400px) {
        
    }
`;