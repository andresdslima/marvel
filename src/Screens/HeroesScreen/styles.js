import { StyleSheet } from "react-native";

export const styles = (width) => {
    return StyleSheet.create({
        heroesListContainer: {
            marginTop: 10,
            backgroundColor: "blue",
            padding: 30,
            flexGrow: 0.75,
            width,
            overflow: scroll,
        },
    });
};
