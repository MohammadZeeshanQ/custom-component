import React from "react";
import styled from "styled-components";

// Css
import "../../css/Buttons.css";

// Material-ui
import { Grid } from "@mui/material";

const Root = styled.div``;

const Wrapper = styled.div``;

const ButtonWrapper = styled.div`
	padding: 5rem 0;
	margin: 1rem 2rem;
	background: #ffffff;
	border-radius: 1rem;
	text-align: center;

	@media (max-width: 600px) {
		padding: 4rem 0;
		margin: 1rem 0.5rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		margin: 1rem 0.5rem;
	} ;
`;

const ButtonBox = styled.div``;

const ButtonTheme = styled.button`
	font: 1rem Roboto;
	background-color: var(--MainBlueColor);
	color: #fcfcfc;
	cursor: pointer;
	letter-spacing: 0.5px;
	padding: 0.7rem 1.5rem;
	border: none;
	border-radius: 0.3rem;
	margin: 0 1rem;
`;

const SimpleButton = styled(ButtonTheme)``;

const HoverButton = styled(ButtonTheme)`
	&:hover {
		background-color: #3ba1ff;
		transition: all 0.3s ease-in-out;
	}
`;

export default function ButtonGrid() {
	const data = [{ title: "Button" }, { title: "Hover" }, { title: "Button" }, { title: "Button" }];
	return (
		<Root>
			<Wrapper>
				<ButtonWrapper>
					<ButtonBox>
						<SimpleButton>Button</SimpleButton>
						<HoverButton>Hover</HoverButton>
						<ButtonTheme>Button</ButtonTheme>
					</ButtonBox>
				</ButtonWrapper>
			</Wrapper>
		</Root>
	);
}
