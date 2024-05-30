import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function HeroCard({ name, image }) {
    return (
        <TouchableOpacity style={styles.heroeContainer}>
            <Image
                source={{
                    uri: image,
                }}
                style={styles.image}
            />
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
}
