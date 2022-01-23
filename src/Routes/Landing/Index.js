import React from "react";
import styled from "styled-components";

const Root = styled.div`
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;
`;

const Wrapper = styled.div`
	text-align: center;
`;

const Header = styled.h1`
	font-size: 5rem;
	margin: 1rem 0;
	letter-spacing: 2px;
	font-family: Roboto;

	@media (max-width: 600px) {
		font-size: 2.5rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 2.5rem;
	} ;
`;

const Description = styled.p`
	font-family: Roboto;
	font-size: 1.2rem;
	letter-spacing: 1px;
	margin: 1rem 0;

	@media (max-width: 600px) {
		font-size: 1rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1rem;
	} ;
`;

const Button = styled.button`
	font-family: Roboto;
	padding: 1rem 2rem;
	margin-top: 3rem;
	letter-spacing: 2px;
	border-radius: 0.5rem;
	font-size: 1rem;
	border: none;
	cursor: pointer;
	background-color: #007ff4;
	color: #ffffff;

	&:hover {
		background-color: #3ba1ff;
		transition: all 0.3s ease-in-out;
	}

	@media (max-width: 600px) {
		font-size: 0.9rem;
		font-family: poppinRegular;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.6rem;
	} ;
`;

export default function Index() {
	return (
		<Root>
			<Wrapper>
				<Header>Hi, Explorer!</Header>
				<Description>Try Varies Types of Components with Us.</Description>
				<a href='https://mohammadzeeshanq.github.io/earth-developer/#/'>
					<Button>Visit My Portfolio</Button>
				</a>
			</Wrapper>
		</Root>
	);
}
