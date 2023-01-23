import styled from "styled-components"

export const DivForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
    gap: 26px;

    padding: 0 68px 0 54px;

    h2{
        font-size: 24x;
        line-height: 28px;
        color: #656565;
        margin: 0;
    }

    label{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        width: 100%;
        color: #656565;
        font-size: 14px;

        span{
            font-size: 11px;
            color: #CECECE;
        }
    }
    input{
        width:100%;
        height: 37px;
        border: 1px solid #DDE6E9;
        border-radius: 4px;
        margin-top: 6px;
        
        :focus{
           box-shadow: 0 0 0 0;
           outline: 0;
           border: solid 2px #a7bcf5;
        }
    }
    button{
        border: 1px solid #DDE6E9;
        height: 30px;
        width: 100%;
        color: #17a7ec;
        font-size: 15px;

    }
`