export default class ApiService {

    _apiBase = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        // if url don`t return status 200-299 we see error message
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    // whis func return array from api / in api we have results
    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results
            .map(this._transformPerson)
            .slice(0, 5);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    // whis func return array from api / in api we have results
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results
            .map(this._transformPlanet)
            .slice(0, 5);
    };

    // bu funq tam hazir fung oldu, bunu componentlerden cagiraraq deyerleri aliriq
    // api-den hansi deyerleri cekmek istediyimizi burda deyirik, _transformBerries-le
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    // whis func return array from api / in api we have results
    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results
            .map(this._transformStarship)
            .slice(0, 5);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };

    getPersonImage = ({ id }) => {
        return `${this._imageBase}/characters/${id}.jpg`
    };

    getStarshipImage = ({ id }) => {
        return `${this._imageBase}/starships/${id}.jpg`
    };

    getPlanetImage = ({ id }) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    // asagida api bize birbasa id vermese asagidaki 2 setrden istifade etmek olar
    // url-den goryrmekcun id ni istifade olunur regex
    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };
}



//const pacapi = new ApiService();

// we get all names of pakemons
// pacapi.getAllGame().then((pakemon) => {
//     pakemon.forEach((p) => {
        //console.log(p.name);
//     })
// });

// we get name of pakemon
// pacapi.getGame(5).then((body) => {
    //console.log(body.name);
// })