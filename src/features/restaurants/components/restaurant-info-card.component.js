import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: turquoise;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 2px;
  background-color: lightseagreen;
`;

const Title = styled.Text`
  padding: 16px;
  color: black;
`;

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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
