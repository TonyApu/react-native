import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import COLORS from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ userNumber, guessRounds, onRestartGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.highlight}>{guessRounds}</Text> Round To Find
        NumBer <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onRestartGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: COLORS.primary800,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    fontFamily: "open-sans",
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.primary500,
  },
  buttonContainer: {
    margin: 24,
  },
});
