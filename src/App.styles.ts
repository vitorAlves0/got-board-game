import styled from "styled-components";

type ContainerProps = {
    changeGrid: number;
}

export const Container = styled.div`
    background-color: #27282f;
    min-height: 100vh;
    overflow-y: hidden;
    color: #fff;
`;

export const Area = styled.div`
    overflow: hidden;
    max-width: 980px;
    margin: auto;
    
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-around;
`;

export const Header = styled.h1`
    text-align: center;
    font-size: 45px;
    padding: 0;
    margin: 0;

    @media (max-width: 500px) {
        font-size: 35px;
    }
`;

export const HouseArea = styled.div<ContainerProps>`
    display: grid;
    grid-template-columns: ${props => (props.changeGrid > 6 || props.changeGrid == 4 ? "repeat(4, 1fr)" : "repeat(3, 1fr)")};
    gap: 15px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0 30px;
    }

    @media (max-width: 500px) {
        grid-template-columns: ${props => (props.changeGrid > 6 ? "repeat(1, 1fr)" : "repeat(2, 1fr)")};
        padding: ${props => (props.changeGrid > 6 ? "0 25px" : "0 20px")};
        gap: 10px;
    }
  
`;

export const Buttons = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        padding: 0 30px;
    }
`;

export const Sorting = styled.div`
    text-align: center;
 

    .emoji {
        font-size: 120px;
        margin-bottom: 15px;
    }

    .txt {
        font-size: 30px;
    }
`;

export const Footer = styled.footer`
    text-align: center;

    .backGame {
        font-size: 20px;
        transition: all ease 0.3s;
        cursor: pointer;
        width: 20%;
        margin: auto;
        margin-bottom: 5px;
        padding: 10px 5px;
        border-radius: 10px;
        transition: all ease 0.3s;


        &:hover {
            background-color: #283593;
        }

        @media (max-width: 688px) {
            width: 40%;
        }
    }

    footer {
        font-size: 12px;
        opacity: 0.1;
    }
    
`;

export const Input = styled.div`
    text-align: center;
`;