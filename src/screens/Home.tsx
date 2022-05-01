import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import Coin from "../components/Coin";
import { CoinType } from "../types";
import { coins } from "../types/api";

const Container = styled.View`
  flex: 1;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const { isLoading, data } = useQuery("coins", coins);
  const [cleanData, setCleanData] = useState<Array<CoinType>>([]);
  useEffect(() => {
    if (data) {
      setCleanData(
        data.filter(
          (coin: CoinType) => coin.rank !== 0 && coin.is_active && !coin.is_new
        )
      );
    }
  }, [data]);

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator color="white" />
      </Loader>
    );
  }

  return (
    <Container>
      <FlatList
        data={cleanData}
        numColumns={3}
        keyExtractor={(item) => item.id + ""}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        style={{
          paddingVertical: 20,
          paddingHorizontal: 10,
          width: "100%",
        }}
        renderItem={({ item, index }) => {
          return <Coin symbol={item.symbol} index={index} id={item.id} />;
        }}
      />
    </Container>
  );
};

export default Home;
