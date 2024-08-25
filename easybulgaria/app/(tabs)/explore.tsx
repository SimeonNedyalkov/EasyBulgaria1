import { StyleSheet, Image, Platform, SafeAreaView, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Hello
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    gap: 8,
    zIndex:100,
    color:'#fff'
  },
  text:{
    color:"red"
  }
});
