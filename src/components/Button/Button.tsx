import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import type { ButtonTypes } from './Button.types';
import { styles } from './Button.styles';
import Lottie from 'lottie-react-native';
import { WaiuruHeadDefault } from '../../lottie';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constants';
import { StyleSheet } from 'react-native';

const Button = ({
  label,
  onPress,
  loading,
  disabled,
  textStyle,
  colorsButtonGradient,
  gradient,
  customLabel,
  ...rest
}: ButtonTypes) => {
  const locations = [0, 0.9];
  if (gradient) {
    return (
      <LinearGradient
        locations={locations}
        colors={
          colorsButtonGradient ?? [
            colors.orangeFloatingGradientLight,
            colors.orangeFloatingGradientDark,
          ]
        }
        style={[styles.container, disabled || loading ? styles.disabled : null]}
      >
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.containerGradient,
            disabled || loading ? styles.disabled : null,
          ]}
          disabled={disabled || loading}
          {...rest}
        >
          {!loading ? (
            <View style={styles.animationWrapper}>
              <Lottie source={WaiuruHeadDefault} autoPlay loop />
            </View>
          ) : (
            <Text style={[styles.label, textStyle]}>{label}</Text>
          )}
        </TouchableOpacity>
      </LinearGradient>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.container, disabled || loading ? styles.disabled : null]}
      {...rest}
    >
      {loading ? (
        <View style={styles.animationWrapper}>
          <Lottie
            source={WaiuruHeadDefault}
            autoPlay
            loop
            style={{ ...StyleSheet.absoluteFillObject }}
          />
        </View>
      ) : customLabel ? (
        customLabel
      ) : (
        <Text style={[styles.label, textStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
