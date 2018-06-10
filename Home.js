import React from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  StatusBar, 
  Button, 
  TextInput, 
  Dimensions, 
  Text, 
  FlatList, 
} from 'react-native';
import { BackHandler, Platform } from "react-native"

import Bookmarks from './src/components/Bookmarks/Bookmarks';
import Suggestions from './src/components/Suggestions/Suggestions';
import ListView from './src/components/ListView/ListView';
import Result from './src/components/Result/Result';

let screenSize = Dimensions.get('window').width-15
let listener = null

// Default behavior: returning false exits the app.

export default class Home extends React.Component {
  constructor(props){
    super(props)

    this.newListView = this.newListView.bind(this)
    this.textChanged = this.textChanged.bind(this)
    this.result = this.result.bind(this)
  }
  state = {
    showFilters:true, 
    showSuggestions: true,
    showBookmarks: true,
    showSearchResult: false,
    showResult: false,    
    listViewOptions: {
      nr: 0,
      label: ''
    }
  }

  static navigationOptions = {
    header: null
  }

  textChanged (text) {
    if(text.length === 0) {
      this.setState({
        showFilters:true,
        showSuggestions: true,
        showBookmarks: true,
        showSearchResult: false,
        showResult: false,
  })
    } else{
      this.setState({
        showFilters: true,
        showSuggestions: false,
        showBookmarks: false,
        showSearchResult: true,
        showResult: false,
        listViewOptions: {nr: 40, label:'Search  results'}
      })
    }
  }

  newListView(newProps){
    this.setState({
      showSuggestions: false,
      showBookmarks: false,
      showSearchResult: true,
      listViewOptions: {nr: newProps.nr, label: newProps.label}
    });
  }
  result(){
    this.setState({
      showFilters:false, 
      showSuggestions: false,
      showBookmarks: false,
      showSearchResult: false,
      showResult: true,
    });
  }
  
  backButtonPressFunction(){
    homepage = true;
    if(this.state.showBookmarks && this.state.showSuggestions) {
      homepage = false;
    }
    this.textChanged('')
    this.textInput.clear()
    return homepage;
  }
  

  componentDidMount() {
    if (Platform.OS == "android" && listener == null) {
      listener = BackHandler.addEventListener("hardwareBackPress", () => {
        return this.backButtonPressFunction()
      })
    }
  }

  render() {
    const { navigate } = this.props.navigation;    

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="dark-content"
          //StatusBarAnimation='fade'
          hidden={true}
          translucent={true}
        />
        <View style={styles.searchBarView}>
          <TextInput style={[styles.searchBar, {width: screenSize}]} placeholder={"Søk"} onChangeText={(text) => {this.textChanged(text)}} ref={input => { this.textInput = input }}/>
        </View>
        {this.state.showFilters ? <View style={[styles.filter, {width: screenSize}]}>
          <Text style={styles.filterText}>Filter 1</Text>
          <Text style={styles.filterText}>Filter 2</Text>
          <Text style={styles.filterText}>Filter 3</Text>
          <Text style={styles.filterText}>Filter 4</Text>
        </View> : null}
        
        {this.state.showSuggestions && this.state.showBookmarks ?  <View style={styles.newcontainer}>
          <Bookmarks screenSize={screenSize} newListView={this.newListView}/>
          <Suggestions screenSize={screenSize} newListView={this.newListView}/>
        </View> : null}
        
        {this.state.showSearchResult ? <ListView 
        screenSize={screenSize} 
        label={this.state.listViewOptions.label} 
        nr={this.state.listViewOptions.nr}
        result={this.result}
        /> : null}

        {this.state.showResult ? <Result screenSize={screenSize}/> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: 'center',
    backgroundColor: '#0b5337'
  },
  searchBarView: {
    //flex: 1,
    alignItems: 'center'
  },
  searchBar: {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 4,
    height: 100,
    textAlign: 'center',
    fontSize: 25, 
    color: 'white'
  },
  filter: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  filterText: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    backgroundColor: '#C5BCA2', 
    textAlign: 'center',
  },
  newcontainer: {
    flex: 4,
  },
});
