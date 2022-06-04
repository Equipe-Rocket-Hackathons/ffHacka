import React, { ReactNode } from 'react';
import { FlatList, RefreshControlProps } from 'react-native';

type Props = {
	children: ReactNode;
	refreshControl?: React.ReactElement<RefreshControlProps, string>;
};

export const VirtualScrollView: React.FC<Props> = ({ children, refreshControl }) => {
	return (
		<FlatList
			data={[]}
			keyExtractor={() => 'key'}
			renderItem={null}
			keyboardShouldPersistTaps='handled'
			refreshControl={refreshControl}
			ListHeaderComponent={
				<>{children}</>
			}
		/>
	);
};