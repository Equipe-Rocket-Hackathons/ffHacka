import styled, { css } from 'styled-components/native';

type ContainerProps = {
	flex: number;
	justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between';
	alignItems: 'flex-start' | 'flex-end' | 'center';
	flexDirection: 'row' | 'column';
};

export const Container = styled.View<ContainerProps>`
	${({ flex }) => flex && css`
		flex: ${flex}
	`}
	${({ justifyContent }) => justifyContent && css`
		justify-content: ${justifyContent};
	`}
	${({ alignItems }) => alignItems && css`
		align-items: ${alignItems};
	`}
	${({ flexDirection }) => flexDirection && css`
		flex-direction: ${flexDirection};
	`}
`;
