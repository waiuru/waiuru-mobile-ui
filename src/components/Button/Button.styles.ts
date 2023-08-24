import { StyleSheet } from 'react-native';
const colors = {
  white: 'rgba(255, 255, 255, 1)', // #FFFFFF
  whiteLight: 'rgba(255, 255, 255, 0.35)', // #FFFFFF35
  black: 'rgba(44, 51, 58, 1)', // #2C333A
};

export const styles = StyleSheet.create({
  containerFloatingButton: {},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: colors.white,
    width: '100%',
  },
  containerGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 60 / 2,
    width: '100%',
  },
  animationWrapper: {
    height: 40,
    width: 40,
  },
  disabled: {
    backgroundColor: colors.whiteLight,
  },
  label: {
    color: colors.black,
  },
});
