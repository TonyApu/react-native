import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import COLORS from "../constants/colors";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const onChangeTextHandler = (enteredValue) => {
    setEnteredNumber(enteredValue);
  };

  const onResetHandler = () => {
    setEnteredNumber("");
  };

  const onConfirmHandler = () => {
    const chosenValue = parseInt(enteredNumber);

    if (isNaN(chosenValue) || chosenValue < 0 || chosenValue > 99) {
      Alert.alert("Invalid number", "Number must be between 0 and 99", [
        { text: "Ok", style: "destructive", onPress: onResetHandler },
      ]);
      return;
    }
    props.onPickedNumberHandler(enteredNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={onChangeTextHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={onResetHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={onConfirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 16,
    padding: 16,
    elevation: 4,
    backgroundColor: COLORS.primary800,
    borderRadius: 8,
  },
  numberInput: {
    height: 50,
    marginVertical: 8,
    borderBottomColor: COLORS.yellow500,
    borderBottomWidth: 2,
    color: COLORS.yellow500,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: 50,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
