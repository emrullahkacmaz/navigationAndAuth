import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { fireStore } from "../firebase";
export default class FavoriItemAdd extends Component {
  constructor(props) {
    super(props);
    tis.state={
        favoriler:[],
    }
  }
   

  componentDidMount() {
    fireStore
      .collection("favoriler")
      .where("urunId","==",this.props.route.params.urunId)
      .get()
      .then((response) => {
        var data = [];
        response.forEach((x) => {
          data.push(x.data());
        });
        this.setState({
          favoriler: data,
        });

        console.log(this.state.urunler);
      })
      .catch((error) => console.log(error));
  }

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          borderWidth: 2,
          borderColor: "black",
          backgroundColor: "white",
          margin: 10,
        }}
      >
       
         
        
        
        <View >
          
          
          
          <View >
            <Text> urunId={item.urunId} </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        renderItem={this.renderItem}
        data={this.state.urunler}
      ></FlatList>
    );
  }
}
