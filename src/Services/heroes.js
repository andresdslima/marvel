import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://superhero-search.p.rapidapi.com/api/heroes',
    headers: {
        'X-RapidAPI-Key': '521e4acd23mshcdcfc08820782bcp1ae031jsn4d141e4dbe6d',
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
    }
};

export const getHeroesList = async () => {
    try {
        const response = await axios.request(options);
        const json = response.json();
        console.log(json);
    } catch (error) {
        console.error(error);
        return error.message;
    }
}
