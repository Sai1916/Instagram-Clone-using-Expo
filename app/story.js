import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useGlobalSearchParams } from "expo-router";
import { stories } from "../assets/stories";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const story = () => {
  const params = useGlobalSearchParams();
  const story = stories.find((story) => story.id == params.storyId);
  const END_POSITION = 200;

  const onSwipeDown = useSharedValue(false);
  const position = useSharedValue(0);
  const opacity = useSharedValue(1);

  // useEffect(() => {
  //   console.log("onStoryExit: ", onStoryExit.value);
  //   if (onStoryExit.value) {
  //     router.back(); 
  //   }
  // }, [onStoryExit.value]);

  // const panGesture = Gesture.Pan()
  //   .onUpdate((e) => {
  //     if (!onSwipeDown.value) {
  //       position.value = e.translationY;
  //     } else {
  //       position.value = END_POSITION + e.translationY;
  //     }
  //   })
  //   .onEnd((e) => {
  //     if (position.value > END_POSITION / 2) {
  //       position.value = withTiming(END_POSITION, { duration: 300 });
  //       onSwipeDown.value = true;
  //       onStoryExit.value = true;
  //       opacity.value = withTiming(0, { duration: 300 });
  //       router.back();
  //     } else {
  //       position.value = withTiming(0, { duration: 300 });
  //       opacity.value = withTiming(1, { duration: 300 });
  //       onSwipeDown.value = false;
  //       onStoryExit.value = false;
  //     }
  //   });

  const panGesture = (e) => { 
    if (e.nativeEvent.translationY > 0) { 
      position.value = e.nativeEvent.translationY;
    } 
    else {
      position.value = END_POSITION + e.nativeEvent.translationY;
      // console.log("position val: ", position.value); 
    }

    // console.log("transitionY val: ", e.nativeEvent.translationY); 
    // console.log("state val: ", e.nativeEvent.state); 
    if (e.nativeEvent.state > 4) {
      if (position.value > (END_POSITION / 3) * 2 && e.nativeEvent.translationY > 0 ) {
        position.value = withTiming(END_POSITION, { duration: 300 });
        onSwipeDown.value = true;
        opacity.value = withTiming(0, { duration: 300 });
        router.back();
      } else {
        position.value = withTiming(0, { duration: 300 });
        opacity.value = withTiming(1, { duration: 300 });
        onSwipeDown.value = false;
      }
    }
  }

  const animatedStyle = useAnimatedStyle(() => ({
    // transform: [{ translateY: position.value }],
    opacity: opacity.value,
  }));

  return (
    <SafeAreaView style={{ flex: 1, padding: 5, backgroundColor: "#262626" }}>
      {/* <GestureDetector gesture={panGesture}> */}
      <PanGestureHandler enabled={true} onHandlerStateChange={panGesture}>
        <Animated.View style={animatedStyle}> 
          <StatusBar style="light" />
          <View>
            <View style={styles.storyHeader}>
              <Animated.Image
                sharedTransitionTag="profileImage"
                source={{ uri: story.userImage }}
                style={{
                  height: 28,
                  width: 28,
                  resizeMode: "contain",
                  borderRadius: 30,
                }}
              />
              <Text
                style={{
                  color: "white",
                  marginHorizontal: 10,
                  fontWeight: 700,
                }}
              >
                {story.userName}
              </Text>
            </View>
            {/* <TouchableOpacity onPress={() => router.back()} style={styles.btn}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={34}
                color="white"
              />
            </TouchableOpacity> */}
          </View>
          <Image
            source={{ uri: story.postImage }}
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
          />
        </Animated.View>
      </PanGestureHandler>
      {/* </GestureDetector> */}
    </SafeAreaView>
  );
};

export default story;

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    top: 10,
    right: 20,
    zIndex: 1,
  },
  storyHeader: {
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    top: 14,
    left: 10,
  },
});
