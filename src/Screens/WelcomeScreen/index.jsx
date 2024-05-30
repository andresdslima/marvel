import { Button, Image, Text } from "react-native";
import ScreenContainer from "../../Components/ScreenContainer";
import { styles } from "./styles";

export default function WelcomeScreen({ navigateForward }) {
    return (
        <ScreenContainer backgroundColor="red">
            <Text style={styles.text}>Welcome to the Marvel Heroes universe!</Text>
            <Image
                source={{
                    uri: "https://colossuscollection.wordpress.com/wp-content/uploads/2012/04/marvel-heroes.jpg",
                }}
                style={styles.logo}
            />
            <Button
                color="#fc0"
                title="Show me the HEROES!"
                onPress={navigateForward}
            />
        </ScreenContainer>
    );
}
