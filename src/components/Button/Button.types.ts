import type { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';

export type ButtonTypes = TouchableOpacityProps & {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  textStyle?: StyleProp<TextStyle>;
  gradient?: boolean;
  customLabel?: any;
  colorsButtonGradient?: string[];
};
