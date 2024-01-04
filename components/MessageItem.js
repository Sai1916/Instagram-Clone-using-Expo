import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeInUp, useAnimatedStyle, withTiming } from "react-native-reanimated";

const MessageItem = React.memo(({ message, vItems, index }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      vItems.value  
        .filter((item) => item.isViewable)  
        .find((viewable) => viewable.item.id === message.id)
    );
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [ 
        {
            scale: withTiming(isVisible ? 1 : 0),
        }
      ]
    }; 
  },[vItems.value]);  

  return (  
    <Animated.View
    //   entering={FadeInUp.delay(300 * index)}
      style={[styles.messageView,animatedStyle]}
    >
      <View style={styles.innerView}> 
        <Image source={{ uri: message.userImage }} style={styles.img} />
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "bold" }}>{message?.name}</Text>
          <Text numberOfLines={1}>
            {message.lastMessageByMe && message.messageRead
              ? message.lastMessageTime
              : message.lastMessage}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
});

export default MessageItem;

const styles = StyleSheet.create({
  messageView: {
    width: "95%",
    height: 60,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 5,
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    resizeMode: "contain",
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});
