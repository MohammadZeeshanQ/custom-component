import React from "react";
import styled from "styled-components";

// Component
import NavItemOne from "./NavItemOne";

// styled
const Container = styled.section`
	padding: 2rem 0;
`;

const NavWrapper = styled.div`
	padding: 2rem 1rem 3rem 1rem;
	background-color: #ffffff;
	border-radius: 1rem;
`;

const HeaderWrapper = styled.div`
	margin-bottom: 3rem;
`;
const Header = styled.h2`
	font-family: Roboto;
	font-size: 1.5rem;
`;

export default function NavGrid() {
	const navData = [
		{
			header: "Simple Header",
			component: <NavItemOne />,
		},
	];

	return (
		<Container>
			{navData.map((item, index) => (
				<NavWrapper key={index}>
					<HeaderWrapper>
						<Header>{item.header}</Header>
					</HeaderWrapper>
					{item.component}
				</NavWrapper>
			))}
		</Container>
	);
}
