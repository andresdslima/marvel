import { StyleSheet } from "react-native";

export const styles = (backgroundColor) => {
    return StyleSheet.create({
        container: {
            backgroundColor,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    });
};
