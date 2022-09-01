import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: black;
    width: 100%;
    color: white;
    justify-content: space-between;
    height: 80px;
    align-items: center;

    p {
        cursor: pointer;
        font-size: 30px;
        font-weight: 700;
        margin: 0 400px;
    }

    > div {
        ul {
            align-items: center;
            display: flex;
            list-style: none;
            margin-right: 400px;

            > li {
                margin: 0 15px;
                cursor: pointer;
                font-weight: 700;
                

                &:hover{
                    color: #1ed760;
                }

                > h4 {
                    padding-right: 25px;
                    border-right: 1px solid white;
                }
            }
        }
    }

`;