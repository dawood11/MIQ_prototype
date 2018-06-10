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
  // handleScroll(event) {
  //   console.log(event.nativeEvent.contentOffset.y);
  // }

  render() {
    //const { navigate } = this.props.navigation;    
    return (
      <ScrollView 
        contentContainerStyle={[styles.container, {width:this.props.screenSize}]} 
        ref={ref => this.scrollView = ref}
        onContentSizeChange={(contentWidth, contentHeight)=>{        
          this.scrollView.scrollTo({
            x: 0,
            y: 133.5,
            animated: false
          });
        }}
        //onScroll={this.handleScroll} scrollEventThrottle={16}
      >

        <View style={[styles.content, {width:this.props.screenSize, backgroundColor: 'rgba(197,188,162,0.5)'}]}>
        <Text style={{textAlign: 'center'}}>Your result -1</Text>          
          <View style={styles.arabicText}>
          <Text style={{fontSize: 35}}>Arabic text</Text>
          <Text>- "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.</Text>
          </View>
          <View style={styles.norwegianText}>
          <Text style={{fontSize: 35}}>Norwegian text</Text>
          <Text>Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet.</Text>
          </View>
        </View>

        <View style={[styles.content, {width:this.props.screenSize, flex: 2}]}>
        <Text style={{textAlign: 'center'}}>Your result</Text>          
          <View style={styles.arabicText}>
          <Text style={{fontSize: 35}}>Arabic text</Text>
          <Text>- "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.</Text>
          </View>
          <View style={styles.norwegianText}>
          <Text style={{fontSize: 35}}>Norwegian text</Text>
          <Text>Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet.</Text>
          </View>
        </View>

        <View style={[styles.content, {width:this.props.screenSize, backgroundColor: 'rgba(197,188,162,0.5)'}]}>
        <Text style={{textAlign: 'center'}}>Your result +1</Text>          
          <View style={styles.arabicText}>
          <Text style={{fontSize: 35}}>Arabic text</Text>
          <Text>- "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.</Text>
          </View>
          <View style={styles.norwegianText}>
          <Text style={{fontSize: 35}}>Norwegian text</Text>
          <Text>Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet.</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
//    flex: 5,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  content:{
    flex:1,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    backgroundColor: '#C5BCA2', 
  },
  arabicText: {
    flex: 1, 
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  norwegianText: {
    flex: 1, 
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
});