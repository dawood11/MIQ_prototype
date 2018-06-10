import React, {Component} from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  FlatList, 
  Text, 
  TouchableHighlight, 
  Navigator
} from 'react-native';

export default class Bookmarks extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    //const { navigate } = this.props.navigation;    
    return (
      <ScrollView contentContainerStyle={[styles.container, {width:this.props.screenSize}]}>
        <FlatList
          data={[{key: 'Bookmark 1'}, {key: 'Bookmark 2'}, {key: 'Bookmark 3'}, {key: 'Bookmark 4'}, {key: 'Bookmark 5'}, {key: 'Bookmark 6'}, {key: 'Bookmark 7'}, {key: 'Bookmark 8'}, {key: 'Bookmark 9'}]}
          renderItem = {
            ({item}) =>
              <TouchableHighlight onPress={() => {this.props.newListView({nr:3, label: 'Bookmark'})}} underlayColor="white">
                <Text style={[styles.BookmarksText, {width:this.props.screenSize}]}>{`${item.key}`}</Text>
              </TouchableHighlight>
          }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10,
    backgroundColor: '#C5BCA2',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
  },
  BookmarksText:{
    padding: 10, 
    borderBottomWidth: 1, 
    textAlign: 'center',
  }
});