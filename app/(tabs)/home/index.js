import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import Post from "../../../components/Post";
import { posts } from "../../../assets/posts";
import { stories } from "../../../assets/stories";
import StoryItem from "../../../components/StoryItem";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { router } from "expo-router";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// const HomePage = () => {

//     const ref = useRef();
//     const flingGestureLeft = Gesture
//         .Fling()
//         .direction(Directions.LEFT | Directions.RIGHT)
//         .onStart((e) => console.log("direction: " + e.absoluteX + " " + e.absoluteY))
//         .onEnd(() => console.log("I was swiped"))
//         // .direction(Directions.RIGHT)
//         // .onEnd(() => console.log("I was swiped right"))
//     // console.log("ref: ", ref);
//   return (
//       <GestureDetector gesture={flingGestureLeft}>
//         <View style={{flex:1, backgroundColor: "skyblue"}}>
//           <Text>Home Page 1</Text>
//         </View>
//     </GestureDetector>
//   )
// }

const { width } = Dimensions.get("screen");

// const panGesture = (e) => {
//   if (
//     e.nativeEvent.translationX < -width / 3 &&
//     e.nativeEvent.velocityX < -width
//   ) {
//     router.push({ pathname: "/messages" });
//   }
// };

const HomePage = () => {
  const END_POSITION = 200;

  const onSwipeDown = useSharedValue(false);
  const position = useSharedValue(0);
  const opacity = useSharedValue(1);

  const panGestureEvent = useAnimatedGestureHandler({
    // onStart: (e) => {
    //   console.log("onStart: ", e);
    // },
    onActive: (e) => {
      console.log("onActive: ", e);
      if(e.absoluteX > 140 && e.velocityX < -600){
        console.log("swiped left");
        router.push("/messages");  
      }
    },
    onEnd: (e) => {
      console.log("onEnd: ", e);
    },
  });

  const pushScreen = () => {
    router.push("/messages");
  }
  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      if (e.absoluteX > 140 && e.velocityX < -600) {
        console.log("swiped left");
        // router.push("/messages");  
        pushScreen();
      } else {
        console.log("not swiped left");
      }
    });

  const nativeGesture = Gesture.Native(); 

  const gestureEvent = Gesture.Simultaneous(panGesture, nativeGesture);
 
  return (
    // <PanGestureHandler onGestureEvent={panGestureEvent}>
    // <GestureDetector
    //   // enabled={true}
    //   gesture={panGesture}
    //   // simultaneousHandlers={} 
    //   // gesture={gestureEvent} 
    // >
      <Animated.ScrollView 
        style={{ backgroundColor: "white", flex: 1 }}
        // onScroll={onScroll}
        bounces={false}
        scrollEventThrottle={16}
      >
        <FlatList
          data={stories}
          horizontal
          renderItem={({ item }) => <StoryItem item={item} />}
          keyExtractor={(item) => item.id}
          style={{ paddingVertical: 10 }}
        />
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        /> 
      </Animated.ScrollView>
    // </GestureDetector>
    // </PanGestureHandler>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
