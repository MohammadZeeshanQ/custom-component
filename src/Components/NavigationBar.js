import React, { useState } from 'react'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';


const tabData = [
    {
        'title': 'Button',
        'link': '/button',
    },
    {
        'title': 'Navigation',
        'link': '/navigation',
    }
]


const Root = styled.div`
    position: fixed;
    border: 1px red solid;
    width: 100vw;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: .6rem 0;

   @media (max-width: 600px) {
    width: 90%;
  }
`;

const LogoWrapper = styled.div`
    flex-grow: 1;
`;

const Logo = styled.button`
    font-family: MontSemiBold;
    color: #007FF4;
    letter-spacing: 3px;
    font-size: 1.5rem;
    padding: .8rem 1rem;
    cursor: pointer;
    border: none;
`;

const TabWrapper = styled.div`

`;

const Link = styled.a`
    margin: 0 1rem;
`;

const TabButton = styled(Logo)`
    letter-spacing: 2px;
    font-size: 1rem;
    border-radius: .5rem;

    &:hover{
        background-color: #007FF4;
        color: #ffffff;
        transition: all .3s ease-in-out;
    };

    @media (max-width:768px){
        display: none;
    };
`;

const MobileTab = styled.div`
    display: none;

    @media (max-width: 768px){
        display: block;
    }
`;




export default function NavigationBar() {

    const [drawer, setDrawer] = useState(false);

    const drawerHandler = () => {
        setDrawer(!drawer);
    }

    return (
        <Root>
            <Wrapper>
                <LogoWrapper>
                    <a href='/'>
                        <Logo>Mozzie</Logo>
                    </a>
                </LogoWrapper>

                <TabWrapper>
                    {
                        tabData.map((item, index) =>
                            <Link key={index} href={item.link}>
                                <TabButton>
                                    {item.title}
                                </TabButton>
                            </Link>
                        )
                    }
                </TabWrapper>

                <MobileTab>
                    {/* Continue Here */}
                </MobileTab>

            </Wrapper>
        </Root>
    )
}
