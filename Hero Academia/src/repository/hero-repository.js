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
            return heroes;

        } catch (error) {
            console.log('something went wrong in repository layer');
            throw {error};
        }
    }

    async deleteHero(heroId){
        
        try {
            await Guardian.destroy({
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