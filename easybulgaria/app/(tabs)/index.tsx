import { Image, StyleSheet, Platform, SafeAreaView, Text, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
      Hello Lene
      </Text>
      <Image source={require('../../assets/images/0955556f6a7758813966092a6f561c08.jpg')} style={styles.background}></Image>
      <Button title='Click Me' onPress={()=>{
        alert('Button Clicked')
      }}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    gap: 90,
    color:'red'
  },
  background:{
    width:300,
    height:300,
  },
  text:{
    color:"red"
  }
});
