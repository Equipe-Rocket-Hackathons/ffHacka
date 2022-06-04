import React, { ReactNode } from 'react';
import { Container } from './styles';

type Props = {
	flex?: number;
	justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between';
	alignItems?: 'flex-start' | 'flex-end' | 'center';
	flexDirection?: 'row' | 'column';
	children: ReactNode;
};

export const Flex: React.FC<Props> = ({
	flex = 0,
	justifyContent = 'flex-start',
	alignItems = 'flex-start',
	flexDirection = 'column'
	children,
}) => {
	return (
		<Container
			flex={flex}
			justifyContent={justifyContent}
			alignItems={alignItems}
			flexDirection={flexDirection}
		>
			{children}
		</Container>
	);
};