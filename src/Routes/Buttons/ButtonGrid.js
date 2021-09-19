import React from 'react'
import styled from 'styled-components'

// Css
import '../../css/Buttons.css'

// Material-ui
import { Grid } from '@mui/material';


const Root = styled.div`

`;

const Wrapper = styled.div`

`;

const ButtonWrapper = styled.div`
    padding: 5rem 0;
    border: 1px #050505 solid;
    text-align: center;

      @media (max-width:600px){
        padding: 4rem 0;
    }
`;

// Button style assigned
const buttonData = [
    {
        'name': 'SAMPLE',
        'style': 'button-one',
    },
    {
        'name': 'SAMPLE',
        'style': 'button-two',
    },
    {
        'name': 'SAMPLE',
        'style': 'button-three',
    },
    {
        'name': 'OUTLINED',
        'style': 'button-four',
    },
    {
        'name': 'OUTLINED',
        'style': 'button-five',
    },
    {
        'name': 'OUTLINED',
        'style': 'button-six',
    },
    {
        'name': 'DISABLED',
        'style': 'button-seven',
    },
    {
        'name': 'DISABLED',
        'style': 'button-eight',
    },
];


export default function ButtonGrid() {
    return (
        <Root>
            <Wrapper>
                <Grid
                    container
                >
                    {
                        buttonData.map((item, index) =>
                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={4}
                                md={4}
                            >
                                <ButtonWrapper>
                                    <button className={item.style} style={{ border: 'none', cursor: 'pointer', fontFamily: 'MontSemiBold', letterSpacing: '2px' }} >
                                        {item.name}
                                    </button>
                                </ButtonWrapper>
                            </Grid>
                        )
                    }
                </Grid>

            </Wrapper>
        </Root>
    )
}
