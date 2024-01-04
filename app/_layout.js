import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//     initialRouteName: "(tabs)",
// };

export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex:1}}> 
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="messages"
          options={{
            animation: "slide_from_right",
            animationDuration: 250,
            title: "react_renderer.js",
          }}
        />
        <Stack.Screen
          name="notifications"
          options={{
            animation: "slide_from_right",
            animationDuration: 100,
            title: "Notifications",
          }}
        />
        <Stack.Screen
          name="story"
          options={{
            animation: "fade_from_bottom",
            animationDuration: 10,
            headerShown: false,
            customAnimationOnGesture: true,
            gestureDirection: "vertical",
            gestureEnabled: true,
            fullScreenGestureEnabled: true,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
