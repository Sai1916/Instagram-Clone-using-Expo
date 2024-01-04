import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";
import { Redirect } from "expo-router";

const index = () => {
  return (
    //   <PagerView style={styles.viewPager} initialPage={0}>
    //     <View style={styles.page} key="1">
    //       <Text>First page</Text>
    //       <Text>Swipe ➡️</Text>
    //     </View>
    //     <View style={styles.page} key="2">
    //       <Text>Second page</Text>
    //       {/* <Post /> */}
    //       {/* <Tabs /> */}
    //     </View>
    //     <View style={styles.page} key="3">
    //       <Text>Third page</Text>
    //     </View>
    //   </PagerView> 
      <Redirect href={"/(tabs)/home"} />
  );
};

export default index;

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
