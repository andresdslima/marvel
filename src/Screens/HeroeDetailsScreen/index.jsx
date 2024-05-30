import { View } from "react-native";
import HeroCard from "../../Components/HeroCard";
import ScreenContainer from "../../Components/ScreenContainer";
import BackButton from "../../Components/BackButton";
import { styles } from "./styles";

export default function HeroeDetailsScreen({ navigateBackward, route }) {
    // Could get the data of the selected hero via navigation or context for example
    // const { params } = route;

    return (
        <ScreenContainer backgroundColor="red">
            <View style={styles.heroesListContainer}>
                <BackButton onPress={navigateBackward} />

                <HeroCard
                    // name={params.name}
                    name="Hero 1"
                    image="https://colossuscollection.wordpress.com/wp-content/uploads/2012/04/marvel-heroes.jpg"
                    race="Race"
                    height="Height"
                    intelligence="Intelligence"
                />
            </View>
        </ScreenContainer>
    );
}
