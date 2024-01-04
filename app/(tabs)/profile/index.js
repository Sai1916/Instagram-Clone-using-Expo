import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontisto } from "react-native-vector-icons";

const index = () => {
  const user = {
    name: "Sai Sumedh",
    username: "saisumedh",
    profileImage: "https://avatars.githubusercontent.com/u/52703087?v=4",
    bio: "I am a full stack developer, designer and a content creator. I love to create content on YouTube and Instagram. I am also a freelancer and I love to create websites and mobile applications.",
    link: "https://saisumedh.tech",
    followers: 873,
    following: 984,
    posts: 47,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <View style={styles.topLeft}>
            <Image source={{ uri: user.profileImage }} style={styles.image} />
          </View>
          <View style={styles.topRight}>
            <View style={styles.topRightItem}>
              <Text style={{ fontWeight: 700, fontSize: 18 }}>
                {user.posts}
              </Text>
              <Text>Posts</Text>
            </View>
            <View style={styles.topRightItem}>
              <Text style={{ fontWeight: 700, fontSize: 18 }}>
                {user.followers}
              </Text>
              <Text>Followers</Text>
            </View>
            <View style={styles.topRightItem}>
              <Text style={{ fontWeight: 700, fontSize: 18 }}>
                {user.following}
              </Text>
              <Text>Followers</Text>
            </View>
          </View>
        </View>
        <Text style={{ fontWeight: 500 }}>{user.name}</Text>
        <View style={styles.username}>
          <Text>@{user.username}</Text>
        </View>
        <Text>{user.bio}</Text>
        <View style={styles.link}>
          <Fontisto name="broken-link" size={24} color="blue" />
          <Text style={styles.linkText}>{user.link}</Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Text style={{ fontWeight: 500 }}>Edit Profile</Text>
          </View>
          <View style={styles.btn}>
            <Text style={{ fontWeight: 500 }}>Share Profile</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 14,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topLeft: {
    alignItems: "center",
    paddingRight: 20,
  },
  topRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.9,
    alignItems: "center",
  },
  topRightItem: {
    alignItems: "center",
  },
  username: {
    backgroundColor: "#f2f2f2",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 16,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkText: {
    color: "blue",
    marginLeft: 5,
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    flex: 1,
    marginHorizontal: 4,
  },
});
