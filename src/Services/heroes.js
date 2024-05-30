const url = "https://superhero-search.p.rapidapi.com/api/heroes";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "f34a48f492msh486e37b138117f1p17f3fcjsnb215fe6fe64b",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
};

export const getHeroesList = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return JSON.parse(result);
    } catch (error) {
        console.error(error);
        return error.message;
    }
};
