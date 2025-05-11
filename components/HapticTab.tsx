import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';


export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
    {...props}
    onPressIn={(ev) => {
      // Add a soft haptic feedback when pressing down on the tabs.
      if (Platform.OS === 'ios' || Platform.OS === 'android') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      props.onPressIn?.(ev);
    }}
  />
  );
}
