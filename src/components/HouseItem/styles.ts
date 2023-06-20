import styled from "styled-components";

type PropsNumHouse = {
    numHouseItem: number;
}

export const Container = styled.div<PropsNumHouse>`
    background-color: #3d3f43;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all ease 0.3s;

    

    img {
        width: ${props => (props.numHouseItem > 6 ? "40px" : "80px")};
        margin-bottom: 10px;
        margin-left: ${props => (props.numHouseItem > 6 ? "15px" : "0")};
        margin-right: ${props => (props.numHouseItem > 6 ? "15px" : "0")};
    }

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 500px) {
        padding: ${props => (props.numHouseItem > 6 ? "5px" : "15px")};
        flex-direction: ${props => (props.numHouseItem > 6 ? "row" : "column")};
    }
`;