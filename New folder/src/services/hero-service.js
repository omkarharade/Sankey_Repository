const {HeroRepository} = require("../repository/index")

class HeroService{

    constructor(){
        this.heroRepository = new HeroRepository();
    }

    async createHero(data) {
        try {
            const newHero = await this.heroRepository.createHeroData(data);
            return newHero;
        } catch (error) {
            console.log("Something went wrong at service layer");
			throw error;
        }
    }

    async getHero(id){
        
        try {
            const hero = await this.heroRepository.getHeroById(id);
            return hero;
        } catch (error) {
            console.log("Something went wrong at service layer");
			throw error;
        }
    }

    async getAllHeroes(){
        
        try {
            const heroes = await this.heroRepository.getAllHeroesData();
            return heroes;
        } catch (error) {
            console.log("Something went wrong at service layer");
			throw error;
        }
    }

    async deleteHero(id){

        try {
            const hero = await this.heroRepository.deleteHeroData(id);
            return hero;
        } catch (error) {
            console.log("Something went wrong at service layer");
			throw error;
        }
    }

    async updateHero(id, data){

        try {
            const updatedHero = await this.heroRepository.updateHeroData(id, data);
            console.log("id", id, "data",  data);
            return updatedHero;
        } catch (error) {
            console.log("Something went wrong at service layer");
			throw error;
        }
    }

}

module.exports = HeroService;