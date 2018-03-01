import React from 'react';
import {
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(1)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -1,
      duration: 1500
    }).start(() => {
      this.state.animation.setValue(1);
    });
  }  

  render() {
    const animatedStyles = {
      transform: [
        {
          // scale, scaleX, scaleY
          scaleX: this.state.animation
        }
      ]
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato'
  }
});

