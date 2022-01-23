import React, { useState, createRef } from "react";
import styled from "styled-components";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Material-ui
import { SwipeableDrawer, List, ListItem, Divider } from "@mui/material";

const tabData = [
	{
		title: "Button",
		link: "/button",
	},
	{
		title: "Nav Bar",
		link: "/navigation",
	},
];

const Root = styled.div`
	position: fixed;
	width: 100vw;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	margin: 0 auto;
	padding: 0.6rem 0;

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const LogoWrapper = styled.div`
	flex-grow: 1;
`;

const Logo = styled.button`
	font-family: Roboto;
	color: #007ff4;
	letter-spacing: 1px;
	font-size: 1.5rem;
	padding: 0.8rem 1rem;
	cursor: pointer;
	border: none;
`;

const TabWrapper = styled.div``;

const Link = styled.a`
	margin: 0 1rem;
`;

const TabButton = styled(Logo)`
	letter-spacing: 1px;
	font-size: 0.9rem;
	border-radius: 0.5rem;

	&:hover {
		background-color: #007ff4;
		color: #ffffff;
		transition: all 0.3s ease-in-out;
	}

	@media (max-width: 768px) {
		display: none;
	} ;
`;

const MobileTab = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
		cursor: pointer;
	} ;
`;

const IconWrapper = styled.div`
	border-radius: 50%;
`;

const MobileLink = styled.a`
	text-decoration: none;
`;

const MobileTabButton = styled.button`
	border: none;
	font-family: Roboto;
	color: #007ff4;
	letter-spacing: 2px;
	font-size: 1rem;
	padding: 0.5rem 0;
`;

export default function NavigationBar() {
	const [drawer, setDrawer] = useState(false);
	const drawerRef = createRef();

	const drawerHandler = () => {
		setDrawer(!drawer);
	};

	return (
		<Root>
			<Wrapper>
				<LogoWrapper>
					<a href='/'>
						<Logo>Mozzie</Logo>
					</a>
				</LogoWrapper>

				<TabWrapper>
					{tabData.map((item, index) => (
						<Link key={index} href={item.link}>
							<TabButton>{item.title}</TabButton>
						</Link>
					))}
				</TabWrapper>

				<MobileTab>
					<IconWrapper onClick={drawerHandler}>
						<MenuIcon style={{ fontSize: "2.8rem", color: "#007FF4" }} />
					</IconWrapper>
				</MobileTab>
			</Wrapper>

			{/* Continue Here */}
			<SwipeableDrawer
				ref={drawerRef}
				open={drawer}
				anchor='right'
				onOpen={drawerHandler}
				onClose={drawerHandler}
			>
				<List sx={{ width: 330 }}>
					<ListItem sx={{ justifyContent: "flex-end", alignItem: "center", margin: ".5rem 0" }}>
						<CloseIcon
							onClick={drawerHandler}
							style={{ cursor: "pointer", color: "#007FF4", fontSize: "2.2rem" }}
						/>
					</ListItem>
					<Divider />
					{tabData.map((item, index) => (
						<MobileLink key={index} style={{ width: "100%", cursor: "pointer" }} href={item.link}>
							<ListItem onClick={drawerHandler} sx={{ margin: ".5rem 0" }}>
								<MobileTabButton>{item.title}</MobileTabButton>
							</ListItem>
							<Divider />
						</MobileLink>
					))}
				</List>
			</SwipeableDrawer>
		</Root>
	);
}
