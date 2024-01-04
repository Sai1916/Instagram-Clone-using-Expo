import { Tabs, router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import {
  Foundation,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={32} color="black" />,
          headerLeft: () => (
            <Image
              style={{ width: 34, height: 34, marginLeft: 10 }}
              source={require("../../assets/logo.png")}
            />
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: 100,
                justifyContent: "space-around",
              }}
            >
              <Pressable onPress={() => router.push("/notifications")}>
                <FontAwesome name="heart-o" size={26} color="black" />
              </Pressable>
              <Pressable onPress={() => router.push("/messages")}>
                <Ionicons
                  name="ios-chatbubble-ellipses-outline"
                  size={26}
                  color="black"
                />
              </Pressable>
            </View>
          ),
          headerTitle: () => (
            <Text style={{ fontFamily: "Roboto", fontSize: 20 }}>
              Instagram
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={focused ?  "search" : "search-outline"} size={28} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name={focused ? "plus-square" : "plus-square-o"} size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? "movie-play" : "movie-play-outline"}
              size={28}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/52703087?v=4",
              }}
              style={{ width: 28, height: 28, borderRadius: 50, borderWidth: 2, borderColor: focused ? "black" : "transparent" }}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
