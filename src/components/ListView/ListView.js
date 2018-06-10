import React, {Component} from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList, 
  Text, 
  TouchableHighlight, 
  Navigator
} from 'react-native';

export default class ListView extends Component {
  constructor(props){
    super(props)
    this.dataList(this.props.nr)
  }
  state = {
    dataArray : [],
  }

  dataList(arraySize){
    for (let i = 1; i < arraySize+1; i++) {
      this.state.dataArray.push({key: this.props.label + ' ' + i})      
    }
  }
  
  render() {
    //const { navigate } = this.props.navigation;    
    return (
      <View style={[styles.searchResult, {width: this.props.screenSize}]}>
        <FlatList
          data={this.state.dataArray}
          renderItem = {
            ({item}) =>
            <TouchableHighlight onPress={() => {this.props.result()}} underlayColor="white">
              <Text style={[styles.listElement, {width: this.props.screenSize}]}>{`${item.key}`}</Text>            
            </TouchableHighlight>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchResult: {
    flex: 4, 
    backgroundColor:'#C5BCA2', 
    alignItems: 'center',
  },
  listElement: {
    padding: 10, 
    borderBottomWidth: 1,  
    textAlign: 'center'
  }
});