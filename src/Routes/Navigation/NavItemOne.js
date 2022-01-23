import React, { useState } from "react";
import styled from "styled-components";

// Icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

// Component
import MobileDrawer from "../../Components/SampleDrawer.js";

// Styled
const Root = styled.div`
	width: 100%;
	background-color: #166191;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 90%;
	margin: 0 auto;
	padding: 0.6rem 0;

	@media (max-width: 600px) {
		width: 95%;
	}
`;

const LogoWrapper = styled.div`
	flex-grow: 1;
`;

const Logo = styled.button`
	font-family: Roboto;
	color: #ffffff;
	letter-spacing: 3px;
	font-size: 1.5rem;
	padding: 0.8rem 1rem;
	cursor: pointer;
	border: none;

	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;

const DesktopContainer = styled.div`
	margin-right: 1rem;
`;

const MobileTab = styled.div`
	cursor: pointer;
`;

const IconWrapper = styled.div`
	border-radius: 50%;
`;

export default function NavItemOne() {
	const [drawer, setDrawer] = useState(false);

	const drawerHandler = () => {
		setDrawer(!drawer);
	};

	return (
		<Root>
			<Wrapper>
				<LogoWrapper>
					<a href='/'>
						<Logo>Home</Logo>
					</a>
				</LogoWrapper>

				<DesktopContainer>
					<AccountCircleIcon style={{ fontSize: "2.5rem", color: "#ffffff", cursor: "pointer" }} />
				</DesktopContainer>

				<MobileTab>
					<IconWrapper onClick={drawerHandler}>
						<MenuIcon style={{ fontSize: "2.5rem", color: "#ffffff" }} />
					</IconWrapper>
				</MobileTab>
			</Wrapper>

			<MobileDrawer drawer={drawer} setDrawer={setDrawer} />
		</Root>
	);
}
