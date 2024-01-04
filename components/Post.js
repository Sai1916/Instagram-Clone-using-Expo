import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather } from "react-native-vector-icons";
import PostImage from "./PostImage";

const Post = ({ post }) => {
  return (
    <View
      style={{
        borderBottomWidth: 0.2,
        borderBottomColor: "lightgray",
        paddingVertical: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            zIndex: 0,
          }}
        >
          <View
            style={{
              width: 38,
              height: 38,
              borderRadius: 30,
              borderWidth: 2,
              borderColor: "#ff7d02",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri: post?.userImage,
              }}
              style={{
                width: 32,
                height: 32,
                borderRadius: 20,
                resizeMode: "contain",
              }}
            />
          </View>
          <Text style={{ fontWeight: "bold", marginHorizontal: 8 }}>
            {post?.userName}
          </Text>
        </View>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
      </View>
      <PostImage imgUrl={post?.postImage} />
      {/* <Image
        source={{  
          uri: post?.postImage,
        }}
        style={{
          width: "100%",
          minHeight: 240,
          // maxHeight: 1080,
          objectFit: "contain",
        }}
      /> */}
      <View style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 120,
              paddingVertical: 5,
            }}
          >
            <Feather name="heart" size={28} color="black" />
            <Feather name="message-circle" size={28} color="black" />
            <Feather name="send" size={28} color="black" />
          </View>

          <Feather name="bookmark" size={26} color="black" />
        </View>
        <View>
          <Text>{post?.likesCount} likes</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", marginRight: 4 }}>
              {post?.userName}
            </Text>
            <Text>{post?.caption}</Text>
          </View>
          <Text>{post?.postedAt}</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
