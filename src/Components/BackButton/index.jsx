import { Text, TouchableOpacity } from "react-native";

export default function BackButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={{ fontWeight: "bold" }}>Back</Text>
        </TouchableOpacity>
    );
}
