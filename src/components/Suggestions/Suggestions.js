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
import { createStackNavigator } from 'react-navigation';
import ListView from '../ListView/ListView'

export default class Suggestions extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={[styles.container, {width:this.props.screenSize}]}>
        <FlatList
          data={[{key: 'Suggestion 1'}, {key: 'Suggestion 2'}, {key: 'Suggestion 3'}, {key: 'Suggestion 4'}, {key: 'Suggestion 5'}, {key: 'Suggestion 6'}, {key: 'Suggestion 7'}, {key: 'Suggestion 8'}, {key: 'Suggestion 9'}]}
          renderItem = {
            ({item}) =>
              <TouchableHighlight onPress={() => {this.props.newListView({nr:3, label: 'Suggestion'})}} underlayColor="white">
                <Text style={[styles.SuggestionsText, {width:this.props.screenSize}]}>{`${item.key}`}</Text>
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
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#C5BCA2',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
  },
  SuggestionsText:{
    padding: 10, 
    borderBottomWidth: 1, 
    textAlign: 'center',
  }
});