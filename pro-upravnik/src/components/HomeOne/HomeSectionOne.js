import React from 'react'
import djole from '../../imgs/djole.gif';
import { Container } from '../../GlobalStyle';
import {
    FirstSection, 
    InfoRow, 
    InfoColumn, 
    TextWrapper, 
    ImgWrapper, 
    Img} from './HomeOne.styled';


const HomeOne = () => {
    return (
        <>
            <FirstSection>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                            Poslove profesionalnog upravljanja i zastupanja vaše zgrade
                            poverite stručnom i licenciranom profesionalnom upravniku
                            stambenih zgrada koji će sve vaše probleme rešavati umesto
                            vas. Kako bi vas bolje upoznali sa poslovima i zadacima
                            profesionalnog upravnika koji su definisani zakonom o
                            održavanju stambenih zgrada malo ćemo vas bliže upoznati sa
                            radom i obavezama profesionalnog upravnika.
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <Img src={djole} alt={"Ns-pro-upravnik-zgrada"} name={"Ns-profesionalni-upravnik-zgrada"}/>
                            </ImgWrapper> 
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </FirstSection>
        </>
    )
}

export default HomeOne
