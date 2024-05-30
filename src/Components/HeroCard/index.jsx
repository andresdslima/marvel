import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function HeroCard({
    name,
    image,
    race = "",
    height = "",
    intelligence = "",
    onPress = () => { },
}) {
    return (
        <TouchableOpacity style={styles.heroeContainer} onPress={onPress}>
            <Image
                source={{
                    uri: image,
                }}
                style={styles.image}
            />
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{race}</Text>
            <Text style={styles.text}>{height}</Text>
            <Text style={styles.text}>{intelligence}</Text>
        </TouchableOpacity>
    );
}
