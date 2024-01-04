import { Dimensions, Image } from "react-native";
import React from "react";
import { PinchGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(Image);
const { width, height } = Dimensions.get("window");

const PostImage = ({ imgUrl }) => {
  const scale = useSharedValue(1);
  const zIndex = useSharedValue(0);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchGesture = useAnimatedGestureHandler({
    onActive: (e) => {
      scale.value = e.scale;
      zIndex.value = 1;
      focalX.value = e.focalX;
      focalY.value = e.focalY;
      //   console.log("scale: ", e); 
    },
    onEnd: (e) => {
      scale.value = withTiming(1, { duration: 300 });
      zIndex.value = withTiming(0, { duration: 300 });
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: focalX.value },
      { translateY: focalY.value },
      { translateX: -width / 2 },
      { translateY: -height / 6 },
      { scale: scale.value },
      { translateX: -focalX.value },
      { translateY: -focalY.value },  
      { translateX: width / 2 },
      { translateY: height / 6 }, 
    ],
  }));

  return (
    <PinchGestureHandler onGestureEvent={pinchGesture}>
      <Animated.View style={{ zIndex }}>
        <AnimatedImage
          source={{
            uri: imgUrl,
          }}
          style={[
            {
              width: "100%",
              minHeight: 240,  
              // maxHeight: 1080,
              objectFit: "contain",
            },
            animatedStyle,
          ]}
        />
      </Animated.View>
    </PinchGestureHandler>
  );
};

export default PostImage;
