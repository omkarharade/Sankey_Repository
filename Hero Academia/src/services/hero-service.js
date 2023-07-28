const {HeroRepository} = require("../repository/index")

class HeroService{

    constructor(){
        this.heroRepository = new HeroRepository();
    }

    async createHero(data) {
        try {
            const newHero = await this.heroRepository.createHero(data);
            return newHero;
        } catch (error) {
            console.log("Something went wrong at service layer");
			throw error;
        }
    }

    async getHero(id){
        
        try {
            const hero = await this.heroRepository.getHeroById(id);
            console.log("hero", hero)
            return hero;
        } catch (error) {
            console.log("Something went wrong at service layer");
			throw error;
        }
    }

    async getAllHeroes(query){
        
        try {
            const heroes = await this.heroRepository.getAllHeroes(query);
            return heroes;
        } catch (error) {
            console.log("Something went wrong at service layer");
			throw error;
        }
    }

    async getInRange(query){
        
        try {
            const heroes = await this.heroRepository.getInRange(query);
            return heroes;
        } catch (error) {
            console.log("Something went wrong at service layer");
			throw error;
        }
    }

    async deleteHero(id){

        try {
            const hero = await this.heroRepository.deleteHero(id);
            return hero;
        } catch (error) {
            console.log("Something went wrong at service layer");
			throw error;
        }
    }

    async updateHero(id, data){

        try {
            const updatedHero = await this.heroRepository.updateHero(id, data);
            console.log("id", id, "data",  data);
            return updatedHero;
        } catch (error) {
            console.log("Something went wrong at service layer");
			throw error;
        }
    }

    async searchAllHeroes(query){
        
        try {
            const heroes = await this.heroRepository.searchAllHeroes(query);
            return heroes;
        } catch (error) {
            console.log("Something went wrong at service layer");
			throw error;
        }
    }

}

module.exports = HeroService;