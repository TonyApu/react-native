import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput(props) {
  const [goal, setGoal] = useState("");

  function handleChangeInput(e) {
    setGoal(e);
  }

  function onAddGoal() {
    props.handleAddGoal(goal);
    setGoal("");
    props.handleCloseInputModal();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/favicon.png')}/>
        <TextInput
          onChangeText={handleChangeInput}
          style={styles.textInput}
          placeholder="Input your goals!"
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={onAddGoal} color='#b7f291'/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.handleCloseInputModal} color='#ebb6b0'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#2e55a3',
    padding: 24,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#5573d9",
    width: "100%",
    height: 50,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    color: '#2e55a3'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  button: {
    marginHorizontal: 8,
    width: '40%'
  }
});
