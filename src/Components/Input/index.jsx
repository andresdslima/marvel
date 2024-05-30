import { TextInput } from "react-native";
import { styles } from "./styles";

export default function Input({
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
}) {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
        />
    );
}
