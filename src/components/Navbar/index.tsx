import React from "react";
import { Container } from "./Style";

const Navbar: React.FC = () => {
    return(
        <Container>
            
            <p>Spotify</p>
            
            <div>
                <ul>
                    <li>
                        <a>Premium</a>
                    </li>
                    <li>
                        <a>Suporte</a>
                    </li>
                    <li>
                        <h4>Baixar</h4>
                    </li>
                    <li>
                        <a>Increver-se</a>
                    </li>
                    <li>
                        <a>Entrar</a>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default Navbar;