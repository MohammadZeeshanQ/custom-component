import React from "react";
import styled from "styled-components";

// component
import NavGrid from "./NavGrid";

const Root = styled.div`
	width: 100%;
	padding: 8rem 0;

	@media (max-width: 600px) {
		padding: 6rem 0;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 6rem 0;
	}
`;

const Wrapper = styled.div`
	width: 90%;
	margin: 0 auto;
`;

const HeaderWrapper = styled.div`
	padding: 2rem 0;
`;

const Header = styled.h1`
	font-family: Roboto;
	font-size: 4rem;
	letter-spacing: 1px;

	@media (max-width: 600px) {
		font-size: 2.5rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 2.5rem;
	}
`;

const Description = styled.p`
	font-family: Roboto;
	font-size: 1.2rem;
	letter-spacing: 1px;
	margin-top: 1rem;

	@media (max-width: 600px) {
		font-size: 1rem;
		line-height: 150%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

export default function Index() {
	return (
		<Root>
			<Wrapper>
				<HeaderWrapper>
					<Header>Navigation Bars</Header>
					<Description>Wide Collection of Responsive Navigation Bar and Dynamic.</Description>
				</HeaderWrapper>

				<NavGrid />
			</Wrapper>
		</Root>
	);
}
