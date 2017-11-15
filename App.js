import React from 'react';
import { View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/album_list';

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

export default App;
