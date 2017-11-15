import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';

import AlbumDetail from './album_detail';

class AlbumList extends Component {
	state = { albums: [] };

	//Method to load data 
	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

export default AlbumList;
