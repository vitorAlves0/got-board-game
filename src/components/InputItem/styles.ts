import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
    gap: 15px;

    label {
        font-size: 40px;
    }

    input {
        border-radius: 10px;
        padding: 15px;
        border: none;
        margin: 15px 0;
        outline: none;
        font-size: 18px;
    }

    button {
        border-radius: 10px;
        padding: 15px;
        border: none;
        background-color: #283593;
        color: #fff;
        font-size: 18px;
        transition: all ease 0.3s;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }
        
    }

    @media (max-width: 500px) {
        width: 80%;
    }
`;