import React from "react";
import { TouchableOpacityProps } from "react-native";
import theme from "../../theme";
import Text from "../Text";

import Styled from "./styles";
import { ICardResultData } from "./interfaces";


const CardResult = ({ data, ...rest }: ICardResultData): JSX.Element => {
  const { location, current, condition } = data;

  return (
    <Styled.ContainerButton {...rest}>
      <Styled.ContainerTemperatureImage>
        <Styled.ContainerTemperature>
          <Text
            fontFamily={theme.fontFamily.OverpassBold}
            fontSize={theme.fontSize.lg30}
            color={theme.colors.white}
            style={{ textAlign: "left" }}
          >
            {current && Math.floor(current.temp_c)}
          </Text>
          <Text
            fontFamily={theme.fontFamily.OverpassBold}
            fontSize={theme.fontSize.sm18}
            color={theme.colors.white}
            style={{ textAlign: "left" }}
          >
            º
          </Text>
        </Styled.ContainerTemperature>

        <Styled.Image
          source={{
            uri: `https:${condition.icon}`,
          }}
        />
      </Styled.ContainerTemperatureImage>

      <Text
        fontFamily={theme.fontFamily.OverpassRegular}
        fontSize={theme.fontSize.sm18}
        color={theme.colors.gray100}
        style={{ textAlign: "left" }}
      >
        {condition.text}
      </Text>

      <br />

      <Text
        fontFamily={theme.fontFamily.OverpassRegular}
        fontSize={theme.fontSize.sm18}
        color={theme.colors.white}
        style={{ textAlign: "left" }}
      >
        {location.name}, {location.region && location.region + ","}{" "}
        {location.country}
      </Text>
    </Styled.ContainerButton>
  );
};

export default CardResult;
