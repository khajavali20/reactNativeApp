import { View, Text, StyleSheet } from "react-native";

export default function App () {
  return (
    <View style={styles.container}>
      <View style={styles.darkmode}>
        <Text style={styles.darkmodeText}> khajavali
        <Text style={styles.bold}> welcome</Text>
        </Text>
      </View>
      <View style={[styles.lightgreen, styles.box, styles.shadowBox, styles.shadow]}> 
      <Text style={styles.text}>Light green API</Text>
      </View>
      <View style= {[ styles.box, styles.lightblue]}> 
      <Text>Light blue API</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: "plum", padding: 60},
  lightgreen: { 
    backgroundColor: "lightgreen",
  },
  lightblue: { 
    backgroundColor: "lightblue",
  },
  box: {
    height: 100,
    width: 100,
    padding: 10,
    marginVertical:10,
    borderColor: "black",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 5
  },
  text: {
    backgroundColor: "red",
    borderRadius: 5
  },
  shadow: {
    elevation: 10
  },
  shadowBox: {
    shadowColor: "red",
    shadowOpacity: 0.6,
    shadowOffset: {
      height: 6, 
      width: 6
    },
    shadowRadius: 5
  },
  darkmode: {
    backgroundColor: "black",
  },
  darkmodeText: {
    color: "white"
  },
  bold: {
    fontWeight: "bold"
  }

});