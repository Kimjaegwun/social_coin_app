import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
// import analytics from "@react-native-firebase/analytics";

const Wrapper = styled(Animated.createAnimatedComponent(View))`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 5px;
  align-items: center;
`;

const CoinName = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

type Props = {
  symbol: string;
  index: number;
  id: string;
};

const Coin: React.FC<Props> = ({ symbol, index, id }) => {
  const navigation = useNavigation<any>();

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
      delay: index * 50,
    }).start();
  }, []);

  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1],
  });

  return (
    <TouchableOpacity
      style={{ flex: 0.31 }}
      onPress={() => {
        navigation.navigate("Detail", { symbol, id });
      }}
    >
      <Wrapper style={{ opacity, transform: [{ scale }] }}>
        <CoinName>{symbol}</CoinName>
      </Wrapper>
    </TouchableOpacity>
  );
};

export default Coin;
