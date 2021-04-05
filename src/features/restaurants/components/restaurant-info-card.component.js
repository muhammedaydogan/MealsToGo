import React from "react";
import { StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Lutece_French_Revolving_Restaurant_at_Canton_Tower_%2820180923183307%29.jpg/1200px-Lutece_French_Revolving_Restaurant_at_Canton_Tower_%2820180923183307%29.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "turquoise" },
  cover: { padding: 2, backgroundColor: "lightseagreen" },
  title: { padding: 16 },
});
