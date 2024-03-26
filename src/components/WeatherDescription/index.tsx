import React from "react";
import { Image } from "react-native";
import theme from "../../theme";

import Styled from "./styles";

import Text from "../Text";

import { IWeatherData } from "./interfaces";

const WeatherDescription = ({ data }: IWeatherData) => {
  return (
    <Styled.Container>
      {data.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <Styled.ContainerItem>
              <Image source={item.icon} />
              <Text
                fontFamily={theme.fontFamily.OverpassBold}
                fontSize={theme.fontSize.xs16}
                color={theme.colors.white}
              >
                {item.value}
              </Text>
              <Text
                fontFamily={theme.fontFamily.OverpassLight}
                fontSize={theme.fontSize.xxs14}
                color={theme.colors.gray400}
              >
                {item.text}
              </Text>
            </Styled.ContainerItem>

            {index !== data.length - 1 && <Styled.Divider />}
          </React.Fragment>
        );
      })}
    </Styled.Container>
  );
};

export default WeatherDescription;
