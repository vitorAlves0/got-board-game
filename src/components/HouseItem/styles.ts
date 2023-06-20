import styled from "styled-components";

type PropsNumHouse = {
    numHouseItem: number;
}

export const Container = styled.div<PropsNumHouse>`
    background-color: #3d3f43;
    padding: 8px;
    height: 135px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all ease 0.3s;

    

    img {
        width: 80px;
        margin-bottom: 10px;
        margin-left: ${props => (props.numHouseItem > 6 ? "15px" : "0")};
        margin-right: ${props => (props.numHouseItem > 6 ? "15px" : "0")};

        @media (max-width: 500px) {
            width: ${props => (props.numHouseItem > 6 ? "40px" : "80px")};
        }
    }

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 500px) {
        padding: ${props => (props.numHouseItem > 6 ? "5px" : "8px")};
        height: ${props => (props.numHouseItem > 6 ? "60px" : "135px")};
        justify-content: ${props => (props.numHouseItem > 6 ? "start" : "center")};
        flex-direction: ${props => (props.numHouseItem > 6 ? "row" : "column")};
    }

    @media (max-width: 400px) {
        height: ${props => (props.numHouseItem > 6 ? "55px" : "135px")};
    }

    @media (max-width: 370px) {
        height: ${props => (props.numHouseItem > 6 ? "46px" : "135px")};
    }
`;