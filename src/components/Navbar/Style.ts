import styled from "styled-components";
import { FaSpotify} from 'react-icons/fa'

export const Container = styled.div`
    display: flex;
    background-color: black;
    color: white;
    height: 80px;
    align-items: center;
    justify-content: space-around;

    p {
        cursor: pointer;
        font-size: 30px;
        font-weight: 700;
    }

    > div {
        ul {
            align-items: center;
            display: flex;
            list-style: none;
            
            justify-content: center;

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

    > section {
        margin-left: 50px;
        align-items: center;
        display: flex;
        padding: 0;
    }

`;

export const SpotifyLogo = styled(FaSpotify)`
    width: 36px;
    height: 32px;

`;