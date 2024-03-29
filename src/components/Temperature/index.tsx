import React from "react";
import theme from "../../theme";
import Text from "../Text";

import Styled from "./styles";

import { ITemperature } from "./interfaces";


const Temperature = ({
  minTemp,
  maxTemp,
  minTempFontSize,
  maxTempFontSize,
}: ITemperature): JSX.Element => {
  return (
    <Styled.TemperatureContainer>
      <Styled.MaxTemperatureContainer>
        <Text
          fontFamily={theme.fontFamily.OverpassBold}
          fontSize={maxTempFontSize}
          color={theme.colors.white}
        >
          {maxTemp}
        </Text>
        <Text
          fontFamily={theme.fontFamily.OverpassBold}
          fontSize={theme.fontSize.lg30}
          color={theme.colors.white}
          style={{ paddingBottom: 35 }}
        >
          º
        </Text>
      </Styled.MaxTemperatureContainer>

      <Styled.MinTemperatureContainer>
        <Text
          fontFamily={theme.fontFamily.OverpassSemiBold}
          fontSize={minTempFontSize}
          color={theme.colors.gray100}
        >
          {""} / {""} {minTemp}
        </Text>
        <Text
          fontFamily={theme.fontFamily.OverpassSemiBold}
          fontSize={theme.fontSize.md22}
          color={theme.colors.gray100}
          style={{ paddingBottom: 24 }}
        >
          º
        </Text>
      </Styled.MinTemperatureContainer>
    </Styled.TemperatureContainer>
  );
};

export default Temperature;
