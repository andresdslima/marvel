import { useState, useEffect } from "react";
import { Button, ScrollView } from "react-native";
import HeroCard from "../../Components/HeroCard";
import Input from "../../Components/Input";
import ScreenContainer from "../../Components/ScreenContainer";
import { getHeroesList } from "../../Services/heroes";
import { styles } from "./styles";

export default function HeroesScreen() {
    const [showMore, setShowMore] = useState(false);
    const [searchHero, setSearchHero] = useState("");

    const test = async () => {
        await getHeroesList();
    };

    // useEffect(() => {
    //   test();
    // }, []);

    return (
        <ScreenContainer backgroundColor="red">
            <Input
                value={searchHero}
                onChangeText={setSearchHero}
                placeholder="Filter Hero by name"
            />
            <Button
                onPress={() => setShowMore(!showMore)}
                color="transparent"
                title={showMore ? "Show Less" : "Show More"}
            />
            <ScrollView
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
                horizontal={!showMore}
                // showsHorizontalScrollIndicator={false}
                style={styles.heroesListContainer}
            >
                <HeroCard
                    name="Hero 1"
                    image="https://colossuscollection.wordpress.com/wp-content/uploads/2012/04/marvel-heroes.jpg"
                />
                <HeroCard
                    name="Hero 2"
                    image="https://colossuscollection.wordpress.com/wp-content/uploads/2012/04/marvel-heroes.jpg"
                />
                <HeroCard
                    name="Hero 3"
                    image="https://colossuscollection.wordpress.com/wp-content/uploads/2012/04/marvel-heroes.jpg"
                />
                <HeroCard
                    name="Hero 4"
                    image="https://colossuscollection.wordpress.com/wp-content/uploads/2012/04/marvel-heroes.jpg"
                />
            </ScrollView>
        </ScreenContainer>
    );
}
