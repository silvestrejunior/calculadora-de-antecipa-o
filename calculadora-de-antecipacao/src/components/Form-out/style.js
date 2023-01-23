import styled from "styled-components";

export const DivOut = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;


    padding: 0 35px 0 35px;
    width: 40%;
    height: 100%;
    background-color: #D1DCE32E;

    color: #17a7ec;
    .tituloESublinha{
        display: flex;
        flex-direction: column ;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;

        h3{
            font-style: italic;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            text-transform: uppercase;
            color: #3D75BB;
            padding: 0;
            margin: 4px;
        }
        span{
            width: 100%;
            border-top: solid 1px #5D9CEC;
            mix-blend-mode: normal;
            opacity: 0.3;
        }
    }

    .valoresReceber{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 40%;
        margin-top: 20px;

        color: #5D9CEC;
        font-style: italic;
        p{
            margin: 0;
        }

    }


`