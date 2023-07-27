const {Guardian} = require('../models/index')

class HeroRepository{

    async createHero(heroData){

        try {
            const newHero = await Guardian.create(heroData);
            console.log(newHero)
            return newHero;

        } catch (error) {
            console.log('something went wrong in repository layer');
            throw {error};
        }
    }

    async getHeroById(heroID){
        
        try {
            const hero = await Guardian.findByPk(heroID);
            if(hero == null) throw "NULL VALUE IN GIVEN ID";
            console.log(hero)
            return hero;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw {error};
        }
    }

    async getAllHeroes(){
        try {
            const heroes = await Guardian.findAll();
            if(heroes == null) throw "GET ALL FUNCTION RETURNED NULL";

            return heroes;

        } catch (error) {
            console.log('something went wrong in repository layer');
            throw {error};
        }
    }

    async deleteHero(heroId){
        
        try {
            const deletedHero = await Guardian.destroy({
                where:{
                    id: heroId
                }
            });

            if(deletedHero == 0) throw "HERO WITH THE INPUT ID DOES NOT EXIST";
            return deletedHero;

        } catch (error) {
            console.log('something went wrong in repository layer');
            throw {error};
        }
    }

    async updateHero(heroId, data){

        try {
            const hero = await Guardian.update(data, {
                where: {
                    id : heroId
                }
            });
            return hero;

        } catch (error) {
            console.log('something went wrong in repository layer');
            throw {error};
        }
    }
}
    

module.exports = HeroRepository;