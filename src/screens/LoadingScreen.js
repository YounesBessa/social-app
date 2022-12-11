import React, {useEffect} from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";

import {UserContext} from "../context/UserContext";

import Text from "../components/Text";

export default LoadingScreen = () => {
  const [_, setUser] = React.useContext(UserContext);
  useEffect(() => {
    setTimeout(async () => {
      setUser(state => ({...state, isLoggedIn: false}));
    })
  }, 500);
  return (
    <Container>
      <Text title color="#FFFFFF">
        SocialApp
      </Text>

      <LottieView
        source={require("../assets/loading.json")}
        autoPlay
        loop
        style={{ width: "100%" }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #222222;
`;
