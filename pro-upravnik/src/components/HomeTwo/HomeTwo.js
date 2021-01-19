import React from 'react'
import {SecondSection, ServiceHeading, ServiceWrapper, ServiceCard, ServiceIcon, ServiceH3, ServiceList, ListItem} from './HomeTwo.styled';
import Icon1 from '../../imgs/Icon1.svg';
import Icon2 from '../../imgs/Icon2.svg';
import Icon3 from '../../imgs/Icon3.svg';


const HomeTwo = () => {
    return (
        <>
            <SecondSection>
                <ServiceHeading>Poslovi profesionalnog upravljanja zgradom </ServiceHeading>
                <ServiceWrapper>
                    <ServiceCard>
                        <ServiceIcon src={Icon1} />
                        <ServiceH3>Administrativni poslovi</ServiceH3>
                        <ServiceList>
                            <ListItem>•	Osnivanje stambene zajednice</ListItem>
                            <ListItem>•	Registracija PIB-a i matičnog broja stambene zajednice i izrada pečata</ListItem>
                            <ListItem>•	Zastupanje stambene zajednice</ListItem>
                            <ListItem>•	Upis stambene zajednice u Registar stambenih zajednica lokalne samouprave</ListItem>
                            <ListItem>•	Podnošenje prijave za registraciju Pravila vlasnika</ListItem>
                            <ListItem>•	Zaključivanje ugovora za održavanje stambene zgrade i održavanje higijene</ListItem>
                            <ListItem>•	Izrada izveštaja o radu  i podnošenje vlasnicima stanova</ListItem>
                        </ServiceList>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceIcon src={Icon2} />
                        <ServiceH3>Finansiski poslovi</ServiceH3>
                        <ServiceList>
                            <ListItem>•	Raspolaganje sredstvima sa tekućeg računa stambene zajednice</ListItem>
                            <ListItem>•	Vođenje evidencije o prihodima i rashodima stambene zajednice</ListItem>
                            <ListItem>•	Naplata ugovorenog iznosa za upravljanje i održavanje stambene zgrade</ListItem>
                            <ListItem>•	Prinudna naplata potraživanja stambene zajednice</ListItem>
                            <ListItem>•	Izrada završnog računa i podnošenje poreske prijave stambene zajednice u slučaju da ista ostvaruje prihod po osnovu rentiranja zajedničkih delova</ListItem>
                        </ServiceList>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceIcon src={Icon3} />
                        <ServiceH3>Tehnički poslovi</ServiceH3>
                        <ServiceList>
                            <ListItem>•	Realizacija radova na hitnim intervencijama ( u što kraćem vremenskom roku a najkasnije 48 sati od prijave vlasnika stanova.)</ListItem>
                            <ListItem>•	Sprovođenje i realizacija godišnjeg programa održavanja na tekućem održavanju</ListItem>
                            <ListItem>•	Sprovođenje i realizacija programa na investicionom održavanju</ListItem>
                        </ServiceList>
                    </ServiceCard>
                </ServiceWrapper>
            </SecondSection>
        </>
    )
}

export default HomeTwo
