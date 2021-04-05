import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Platform, StatusBar as StatusBar } from "react-native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: { padding: 16, backgroundColor: "pink" },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "orange",
  },
});
