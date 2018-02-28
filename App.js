import React from 'react';
import { View, Text }  from 'react-native';
import styled from 'styled-components';
import { StackNavigator } from 'react-navigation';
import OpacityScreen from './src/Opacity';
import TranslatePositionScreen from './src/TranslatePosition';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  height: 100px;
`;

const menuItems = ['Opacity', 'TranslatePosition'];

const MenuScreen = ({ navigation }) => {
  return (
    <Container>
      {menuItems.map((item, index) => (
        <Button key={index} onPress={() => navigation.navigate(item)}>
          <Text>{item}</Text>
        </Button>
      ))}
    </Container>
  )
}


export default StackNavigator(
  {
    Menu: {
      screen: MenuScreen,
    },
    Opacity: {
      screen: OpacityScreen,
    },
    TranslatePosition: {
      screen: TranslatePositionScreen,
    }
  },
  {
    initialRouteName: 'Menu',
  }
);

