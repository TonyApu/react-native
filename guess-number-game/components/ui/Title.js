import { StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      padding: 12,
      fontSize: 24,
      fontFamily: 'open-sans-bold',
      borderColor: 'white',
      borderWidth: 2,
      color: 'white',
    }
})
