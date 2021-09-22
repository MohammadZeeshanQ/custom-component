import React, { useState } from 'react'
import styled from 'styled-components'


// Icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


// Material-ui
import { SwipeableDrawer, List, ListItem, Divider } from '@mui/material';


// Style
const Root = styled.div`
    width: 100%;
    background-color: #166191;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: .6rem 0;

   @media (max-width: 600px) {
    width: 95%;
  }
`;

const LogoWrapper = styled.div`
    flex-grow: 1;
`;

const Logo = styled.button`
    font-family: MontSemiBold;
    color: #FFffff;
    letter-spacing: 3px;
    font-size: 1.5rem;
    padding: .8rem 1rem;
    cursor: pointer;
    border: none;
`;

const DesktopContainer = styled.div`

`;

const MobileTab = styled.div`
        display: none;
    
         @media (max-width:768px){
        display: block;
        cursor: pointer;
    
    };
`;

const IconWrapper = styled.div`
    border-radius: 50%;
`;

const MobileLink = styled.a`
    text-decoration: none;
`;

const MobileTabButton = styled.button`
    border: none;
    font-family: MontSemiBold;
    color: #ffffff;
    letter-spacing: 2px;
    font-size: 1rem;
    padding: .5rem 0;
`;



export default function NavItemOne({ drawerRef }) {

    const [drawer, setDrawer] = useState(false);

    const tabData = [
        {
            'title': 'Button',
            'link': '/button',
        },
        {
            'title': 'Nav Bar',
            'link': '/navigation',
        }
    ];

    const drawerHandler = () => {
        setDrawer(!drawer);
    }

    return (
        <Root>
            <Wrapper>
                <LogoWrapper>
                    <a href='/'>
                        <Logo>Home</Logo>
                    </a>
                </LogoWrapper>

                <DesktopContainer>
                    <AccountCircleIcon style={{ fontSize: '2.8rem', color: '#ffffff' }} />
                </DesktopContainer>

                <MobileTab>
                    <IconWrapper onClick={drawerHandler} >
                        <MenuIcon style={{ fontSize: '2.8rem', color: '#ffffff' }} />
                    </IconWrapper>
                </MobileTab>

            </Wrapper>

            <SwipeableDrawer
                ref={drawerRef}
                open={drawer}
                anchor='right'
                onOpen={drawerHandler}
                onClose={drawerHandler}
            >
                <List
                    sx={{ width: 330, }}
                >
                    <ListItem sx={{ justifyContent: 'flex-end', alignItem: 'center', margin: '.5rem 0' }}>
                        <CloseIcon
                            onClick={drawerHandler}
                            style={{ cursor: 'pointer', color: '#007FF4', fontSize: '2.2rem', }}
                        />
                    </ListItem>
                    <Divider />
                    {
                        tabData.map((item, index) =>
                            <MobileLink key={index} style={{ width: '100%', cursor: 'pointer' }} href={item.link}>
                                <ListItem onClick={drawerHandler} sx={{ margin: '.5rem 0' }}>
                                    <MobileTabButton>
                                        {item.title}
                                    </MobileTabButton>
                                </ListItem>
                                <Divider />
                            </MobileLink>
                        )
                    }
                </List>
            </SwipeableDrawer>

        </Root>
    )
}
