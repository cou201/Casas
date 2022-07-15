import React from 'react'
import styled from 'styled-components'




const Section = styled.section`

`
const Container = styled.div`

`
const ColumnLeft= styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 40px);
text-align: center;
margin-bottom: 4rem
`

const InfoSection = () => {
  return (
    <Section>
        <Container>
            <ColumnLeft>
            <h1>Contact Me</h1>
            <h3>David Estrada</h3>
            <p>Cali-Valle del cauca</p>
            <p>3186832028</p>
            <p>DavidEstradag200@gmail.com</p>
            </ColumnLeft>
        </Container>
    </Section>
  )
}

export default InfoSection