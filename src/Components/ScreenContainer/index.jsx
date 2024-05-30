import { View } from "react-native";
import { styles } from "./styles";

export default function ScreenContainer({ children, backgroundColor }) {
    return <View style={styles(backgroundColor).container}>{children}</View>;
}
