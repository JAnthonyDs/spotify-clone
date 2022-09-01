import styled from "styled-components";

interface Props {
    bgcolor: string,
    textColor: string
}

export const Container = styled.div<Props>`
    background-color: ${props => props.bgcolor};
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;


    > section {
        margin-right: 80px;

        > p{
            color: ${props => props.textColor};
            font-weight: 800;
            padding-bottom: 20px;
        }
        > main{
            color: ${props => props.textColor};
            font-weight: 900;
            font-size: 64px;
            max-width: 700px;
        }

        > h5{
            color: ${props => props.textColor};
            font-weight: 400;
            padding-top: 20px;
            font-size: 26px;
            max-width: 700px;
        }
    }

    > div {
        > img {
            max-width: 400px;
        }
    }

`;