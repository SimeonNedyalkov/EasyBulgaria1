import { Image, StyleSheet, Platform, SafeAreaView, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
      Hello Lene
      </Text>
      <Image source={require('../../assets/images/0955556f6a7758813966092a6f561c08.jpg')} style={styles.background}></Image>
      
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
    color:'red'
  },
  background:{
    zIndex:0,
    width:500,
    height:500,
  }
});
