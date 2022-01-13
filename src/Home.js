import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
export default class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state= {
      data : [{
        urunId: 1,
        ad : "Bilgisayar"
      },{
        urunId: 2,
        ad : "Buzdolabı"
      },
      {
        urunId: 3,
        ad : "Televizyon"
      },
      {
        urunId: 4,
        ad : "Fırın"
      },]
    }

  }

  renderItem = ({item}) =>{
    <View>
      <Text>{item.ad}</Text>
      <Text></Text>
      <Text></Text>
      <FavoriItemButton urunId = {item.urunId}/>
    </View>
  }

  render() {
    return (
      <FlatList renderItem={this.renderItem} data={this.state.data}></FlatList>
    );
  }
}
