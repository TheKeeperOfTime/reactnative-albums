import React from 'react';
import { View } from 'react-native';

const Card = () => {
	return (
		<View style={containerStyle}>

		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottom: 0,
		elevation: 5,
		opacity: 0.1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
};

export default Card;