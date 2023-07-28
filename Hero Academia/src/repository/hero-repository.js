const {Guardian} = require('../models/index')
const { Op } = require("sequelize");

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

    async getAllHeroes(query){
        try {

            let getAllHeroQuery = {};

            let paginatedQuery = {
                limit: query.size,
                offset: (query.page-1)*query.size
            }
            
            if(query.page  && query.size){
                console.log("running here")
                getAllHeroQuery = paginatedQuery
            }
            
            if(query.page == 0)  throw "PAGE NUMBER INVALID TRY AGAIN"

            const heroes = await Guardian.findAll(
                getAllHeroQuery
            );
            if(heroes == null) throw "GET ALL FUNCTION RETURNED NULL";
            return heroes;

        } catch (error) {
            console.log('something went wrong in repository layer');
            throw {error};
        }
    }

    async getInRange(query){
        try {

            let filter = [];

            let minRange = parseFloat(query.minRange);
            let maxRange = parseFloat(query.maxRange);


            if(minRange){
                filter.push({government_allowance: {[Op.gte] : minRange }})
            }

            if(maxRange){
                filter.push({government_allowance: {[Op.lte] : maxRange}})
            }


            const heroes = await Guardian.findAll({
                where: filter
            });

            if(heroes == null) throw "IN RANGE FUNCTION RETURNED NULL";

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

    async searchAllHeroes(query){

        const searchResult = await Guardian.findAll(
            {
                where : {
                    [Op.or] : [
                        {
                            name: {
                                [Op.iLike]: `%${query.search}%`,
                            },
                        },
                        {
                            alias: {
                                [Op.iLike]: `%${query.search}%`,
                            },
                        },
                        
                    ]
                },
                limit: query.size,
                offset: (query.page-1)
            }
        );

        // const searchResult = await Guardian.findAll();

        if(searchResult == null) throw "GET ALL FUNCTION RETURNED NULL";

        return searchResult;
    }
}
    

module.exports = HeroRepository;