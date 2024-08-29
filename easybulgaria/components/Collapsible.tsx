import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { Colors } from '@/constants/Colors';
import { Text, View } from 'react-native-reanimated/lib/typescript/Animated';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <View>
      <Text>"Easy Bulgaria" is a React Native app designed to help users effortlessly discover restaurants, hotels, and various points of interest in Bulgaria. The app integrates Google Maps for an intuitive and interactive experience, allowing users to explore nearby places, view details, and navigate to their desired locations. It's a simple and efficient tool for both tourists and locals looking to explore Bulgaria's attractions with ease.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
