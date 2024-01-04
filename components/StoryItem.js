import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import Animated from "react-native-reanimated";

const StoryItem = ({ item }) => {
  return (
    <Pressable style={{ width: 85, alignItems: "center" }} onPress={() => router.push({pathname: '/story', params:{
        storyId: item.id
    }})}> 
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 60,
          borderWidth: item.id != 1 ? 3 : 0,
          borderColor: "#ff7d02", 
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.Image
          sharedTransitionTag="profileImage"
          source={{ uri: item?.userImage }}
          style={{
            width: 68,
            height: 68,
            borderRadius: 50,
            padding: 10,
            resizeMode: "contain",
          }}
        />
      </View>
      <Image />
      <Text
        style={{ textAlign: "center", fontSize: 12, fontWeight: "light" }}
        numberOfLines={1}
      >
        {item.id == 1 ? "Your Story" : item?.userName}
      </Text>
    </Pressable>
  );
};

export default StoryItem;

const styles = StyleSheet.create({});
