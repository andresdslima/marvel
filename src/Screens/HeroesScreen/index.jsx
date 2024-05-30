import { useState, useEffect } from "react";
import {
    Button,
    ScrollView,
    FlatList,
    ActivityIndicator,
    Text,
} from "react-native";
import HeroCard from "../../Components/HeroCard";
import Input from "../../Components/Input";
import ScreenContainer from "../../Components/ScreenContainer";
import BackButton from "../../Components/BackButton";
import { getHeroesList } from "../../Services/heroes";
import { styles } from "./styles";

export default function HeroesScreen({ navigateForward, navigateBackward }) {
    const [showMore, setShowMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [searchHero, setSearchHero] = useState("");
    const [completeHeroesList, setCompleteHeroesList] = useState([]);
    const [copyCompleteHeroesList, setCopyCompleteHeroesList] = useState([]);

    const dynamicWidth = showMore ? 350 : 300;
    const shouldShowHeroesHighlights =
        !loading && !showMore && completeHeroesList.length > 0;
    const shouldShowCompleteHeroesList =
        !loading && showMore && completeHeroesList.length > 0;
    const shouldShowErrorMsg =
        !loading && errorMsg.length > 0 && completeHeroesList.length === 0;

    const getHeroesAsync = async () => {
        try {
            setErrorMsg("");
            setLoading(true);
            const heroes = await getHeroesList();
            if (heroes) {
                setCompleteHeroesList(heroes);
                setCopyCompleteHeroesList(heroes);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            console.error(error);
            setErrorMsg(error.message);
        }
    };

    const filterHeroesList = (text) => {
        if (text.length > 1) {
            setCompleteHeroesList(
                copyCompleteHeroesList.filter((hero) =>
                    hero.name.toLowerCase().includes(text.toLowerCase())
                )
            );
            console.log("copyCompleteHeroesList");
            console.log(copyCompleteHeroesList);
            console.log("completeHeroesList");
            console.log(completeHeroesList);
        } else {
            setCompleteHeroesList(copyCompleteHeroesList);
        }
    };

    useEffect(() => {
        getHeroesAsync();
        setSearchHero("");
    }, []);

    useEffect(() => {
        filterHeroesList(searchHero);
    }, [searchHero]);

    return (
        <ScreenContainer backgroundColor="red">
            <Input
                value={searchHero}
                onChangeText={setSearchHero}
                placeholder="Filter Hero by name"
            />
            <BackButton onPress={navigateBackward} />
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
                style={styles(dynamicWidth).heroesListContainer}
            // showsHorizontalScrollIndicator={false}
            >
                {loading && <ActivityIndicator color="#fff" />}
                {shouldShowErrorMsg && <Text>{errorMsg}</Text>}
                {shouldShowHeroesHighlights && (
                    <FlatList
                        data={completeHeroesList.slice(0, 4)}
                        horizontal
                        // NEVER use the index as a key, this is just a mock
                        keyExtractor={(hero, i) => `hero-${i}`}
                        renderItem={({ hero, i }) => (
                            <HeroCard
                                name={`Hero ${i}`}
                                // Use image.sm
                                image="https://colossuscollection.wordpress.com/wp-content/uploads/2012/04/marvel-heroes.jpg"
                                onPress={navigateForward}
                            />
                        )}
                    />
                )}
                {/* {shouldShowHeroesHighlights && (
          <FlatList
            data={completeHeroesList.slice(0, 4)}
            horizontal
            keyExtractor={(hero) => hero.id.toString()}
            renderItem={({ hero }) => (
              <HeroCard
                name={hero.name}
                image={hero.images.sm}
                // Send hero details via navigation here
                onPress={navigateForward}
              />
            )}
          />
        )} */}
                {shouldShowCompleteHeroesList && (
                    <FlatList
                        // Could also use showMore to determine if FlatList should have 1 or 2 columns, which image to use, etc
                        data={completeHeroesList}
                        numColumns={2}
                        keyExtractor={(hero, i) => `hero-${i}`}
                        renderItem={({ hero, i }) => (
                            <HeroCard
                                name={`Hero ${i}`}
                                // Use image.xs
                                image="https://colossuscollection.wordpress.com/wp-content/uploads/2012/04/marvel-heroes.jpg"
                                onPress={navigateForward}
                            />
                        )}
                    />
                )}
            </ScrollView>
        </ScreenContainer>
    );
}
