import React from "react";
import styled from "styled-components";

// component
import ButtonGrid from "./ButtonGrid";

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
	width: 80%;
	margin: 0 auto;
`;

const HeaderWrapper = styled.div`
	padding: 2rem 0;
`;

const Header = styled.h1`
	font-family: Roboto;
	font-size: 4rem;
	letter-spacing: 0.5px;

	@media (max-width: 600px) {
		font-size: 2.5rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 2.5rem;
	}
`;

const Description = styled.p`
	font-family: Roboto;
	font-size: 1rem;
	letter-spacing: 0.5px;
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
					<Header>Buttons</Header>
					<Description>
						Wide collection of Button with Effects, Loading State, Hover and Many More.
					</Description>
				</HeaderWrapper>
				<ButtonGrid />
			</Wrapper>
		</Root>
	);
}
