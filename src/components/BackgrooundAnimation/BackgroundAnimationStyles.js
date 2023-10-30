import styled from "styled-components"

export const BackgroundAnimation = styled.div`
max-width: 1040px;
display: flex;
flex: 0 0 100%;
max-width: 100%;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`