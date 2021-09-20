import React from 'react'
import styled from 'styled-components'


const Root = styled.section`

`;

const Wrapper = styled.div`

`;

const NavigationWrapper = styled.div`
    border: 1px red solid;
    margin: 2rem 0;
    display: flex;
    align-items: center;
`;



const navData = [
    {
        'name': 'Navigation Bar 1',
        'logo': '',
        'style': '',
    },
    {
        'name': 'Navigation Bar 2',
        'logo': '',
        'style': '',
    },
    {
        'name': 'Navigation Bar 3',
        'logo': '',
        'style': '',
    },
];


export default function NavGrid() {
    return (
        <Root>
            <Wrapper>
                {
                    navData.map((item, index) =>
                        <NavigationWrapper key={index}>

                        </NavigationWrapper>
                    )
                }
            </Wrapper>
        </Root>
    )
}
