import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.itemWrapper}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDelete.bind(this, props.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.itemGoal}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#94baf7",
  },
  pressItem: {
    opacity: 0.5,
  },
  itemGoal: {
    color: "white",
    padding: 8,
  },
});
