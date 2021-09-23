import React, { useState, createRef } from 'react'
import styled from 'styled-components'

// Icon
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Material-ui
import { SwipeableDrawer, List, ListItem, Divider } from '@mui/material';

// Styled
const MobileLink = styled.a`
    text-decoration: none;
`;

const MobileTabButton = styled.button`
    width: 100%;
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
    font-family: MontSemiBold;
    color: #166191;
    letter-spacing: 2px;
    font-size: 1rem;
    padding: .5rem 0;
    border: none;
`;


export default function SampleDrawer({ drawer, setDrawer }) {

    const drawerRef = createRef();

    const drawerHandler = () => {
        setDrawer(!drawer);
    }

    const tabData = [
        {
            'title': 'Item 1',
            'link': '',
        },
        {
            'title': 'Item 2',
            'link': '',
        },
        {
            'title': 'Item 3',
            'link': '',
        }
    ];


    return (
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
                        style={{ cursor: 'pointer', color: '#166191', fontSize: '2.2rem', border: '1px solid #166191', borderRadius: '50%', }}
                    />
                </ListItem>
                <Divider />
                {
                    tabData.map((item, index) =>
                        <MobileLink key={index} href={item.link}>
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

    )
}
