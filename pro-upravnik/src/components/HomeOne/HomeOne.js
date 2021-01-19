import React from 'react'
import {FirstSection, InfoRow, InfoColumn, TextWrapper, ImgWrapper, Img} from './HomeOne.styled';
import Djole from '../../imgs/Djole.png';
import { Container } from '../../GlobalStyle';

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
                                <Img src={Djole} alt={"djole"}/>
                            </ImgWrapper> 
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </FirstSection>
        </>
    )
}

export default HomeOne
