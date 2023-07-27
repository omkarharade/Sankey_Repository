const {Test} = require('../models/index')

class HeroRepository{

    async createHero(heroData){

        try {
            const newHero = await Test.create(heroData);
            console.log(newHero)
            return newHero;

        } catch (error) {
            console.log('something went wrong in repository layer');
            throw {error};
        }
    }

    async getHeroById(heroID){
        
        try {
            const hero = await Test.findByPk(heroID);
            console.log(hero)
            return hero;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw {error};
        }
    }

    async getAllHeroes(){
        try {
            const heroes = await Test.findAll();
            return heroes;

        } catch (error) {
            console.log('something went wrong in repository layer');
            throw {error};
        }
    }

    async deleteHero(heroId){
        
        try {
            await Test.destroy({
                where:{
                    id: heroId
                }
            });

        } catch (error) {
            console.log('something went wrong in repository layer');
            throw {error};
        }
    }

    async updateHero(heroId, data){

        try {
            const hero = await Test.update(data, {
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