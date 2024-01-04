import { View, Text, Dimensions, FlatList } from "react-native";
import React from "react";
import { messagesData } from "../assets/messagesData";
import MessageItem from "../components/MessageItem";
import { useSharedValue } from "react-native-reanimated";

const { width } = Dimensions.get("screen");

const messages = () => {

  const vItems = useSharedValue([]);

  const data = new Array(30).fill(0).map((_, index) => ({ id: index}));

  return (
    <View style={{flex:1, backgroundColor: 'white'}}>  
      <FlatList 
        data={messagesData}
        onViewableItemsChanged={({ viewableItems }) => {
          // console.log("Visible items are", viewableItems);
          vItems.value = viewableItems;
        }}
        renderItem={({item, index}) => (  
         <MessageItem message={item} index={index} vItems={vItems} />
        )}
        keyExtractor={(item) => item.id} 
      />
    </View>
  );
};

export default messages;
