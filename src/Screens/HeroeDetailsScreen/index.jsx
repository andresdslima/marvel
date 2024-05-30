import { View } from "react-native";
import HeroCard from "../../Components/HeroCard";
import ScreenContainer from "../../Components/ScreenContainer";
import { styles } from "./styles";

export default function HeroeDetailsScreen({ route }) {
    // const { params } = route;

    return (
        <ScreenContainer backgroundColor="red">
            <View style={styles.heroesListContainer}>
                <HeroCard
                    name="Hero 1"
                    image="https://colossuscollection.wordpress.com/wp-content/uploads/2012/04/marvel-heroes.jpg"
                />
            </View>
        </ScreenContainer>
    );
}
