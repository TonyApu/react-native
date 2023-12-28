import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [listGoals, setListGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleAddGoal(goal) {
    setListGoals((currentGoal) => [
      ...currentGoal,
      { text: goal, id: Math.random().toString() },
    ]);
  }

  function handleDeleteGoal(id) {
    setListGoals((currentGoal) => currentGoal.filter((goal) => goal.id !== id));
  }

  function handleOpenInputModal() {
    setIsModalVisible(true);
  }

  function handleCloseInputModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={handleOpenInputModal}
          color="#94baf7"
        />
        <GoalInput
          visible={isModalVisible}
          handleAddGoal={handleAddGoal}
          handleCloseInputModal={handleCloseInputModal}
        />
        <View style={styles.goalContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={listGoals}
            renderItem={(renderItem) => {
              return (
                <GoalItem item={renderItem.item} onDelete={handleDeleteGoal} />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#2e55a3'
  },
  goalContainer: {
    flex: 5,
    marginTop: 24,
  },
});
