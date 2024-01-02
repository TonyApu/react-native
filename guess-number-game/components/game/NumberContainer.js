import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textNumber}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        margin: 24,
        padding: 24,
        borderColor: COLORS.yellow500,
        borderRadius: 4,
    },
    textNumber: {
        fontFamily: 'open-sans-bold',
        fontSize: 36,
        // fontWeight: 'bold',
        color: COLORS.yellow500,
    }
});