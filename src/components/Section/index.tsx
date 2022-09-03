import React from "react";

import { Container, Button } from "./Style";


interface Props {
    bgcolor: '#993399' | 'rgb(41, 65, 171)',
    title: string,
    main: string,
    second: string,
    textColor: string,

    textButton: string,
    colorButton: string,
    textColorButton: string
}

const Section: React.FC<Props> = ({bgcolor,title,main,second, textColor, textButton, colorButton, textColorButton}) => {
    return(
        <Container bgcolor={bgcolor} textColor={textColor}>
            <section>
                <p>{title}</p>
                <main>
                    {main}
                </main>
                <h5>
                    {second}
                </h5>

                <Button colorButton={colorButton} textColor={textColorButton}>{textButton}</Button>
            </section>
            <div>
                <img src="https://i.scdn.co/image/ab678e040000ed3af7356c5aab47bd778d5586b1"/>
            </div>

            
            

        </Container>
    )
}

export default Section;