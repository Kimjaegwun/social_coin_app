import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { VictoryChart, VictoryLine, VictoryScatter } from "victory-native";
import { DetailScreenProps, HistoryType } from "../types";
import { history, info } from "../types/api";

const Container = styled.ScrollView`
  flex: 1;
`;

const Detail: React.FC<DetailScreenProps> = ({
  navigation,
  route: {
    params: { symbol, id },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({
      title: symbol,
    });
  }, []);

  const { isLoading: infoLoading, data: infoData } = useQuery(
    ["coinInfo", id],
    info
  );

  const { isLoading: historyLoading, data: historyData } = useQuery(
    ["coinHistory", id],
    history
  );

  const [victoryData, setVictoryData] = useState([]);
  useEffect(() => {
    if (historyData) {
      setVictoryData(
        historyData.map((price: HistoryType) => ({
          x: new Date(price.timestamp).getTime(),
          y: price.price,
        }))
      );
    }
  }, [historyData]);

  return (
    <Container>
      {!historyLoading && (
        <VictoryChart height={360} animate>
          <VictoryLine
            interpolation={"monotoneX"}
            data={victoryData}
            style={{ data: { stroke: "#1abc9c" } }}
          />
          <VictoryScatter
            data={victoryData}
            style={{ data: { fill: "#1abc9c" } }}
          />
        </VictoryChart>
      )}
    </Container>
  );
};

export default Detail;
