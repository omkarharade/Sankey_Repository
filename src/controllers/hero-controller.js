
const {HeroService} = require('../services/index')
const heroService = new HeroService();

const create = async (req, res) => {

    try {
        console.log(req.body);
        const response = await heroService.createHero(req.body);
        console.log(response)

        return res.status(201).json({
            data: response,
            success: true,
            message: "successfully created a hero",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a hero",
            err: error
        });
    }
}

const get = async (req, res) => {

    try {
        console.log(req.params.id);
        const response = await heroService.getHero(req.params.id);
        console.log(response)

        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully fetched a hero data",
            err: {},
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch a hero data",
            err: error
        });
    }
}


const getAll = async(req, res) => {

    try {

        // console.log(req.query);
        const response = await heroService.getAllHeroes();
        console.log(response);

        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully fetched all heroes",
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch all heroes",
            err: error
        });
    }
}




const update = async (req, res) => {

    try {
        const response = await heroService.updateHero(req.params.id, req.body);
        console.log(response);
        return res.status(202).json({
            data: response,
            success: true,
            message: "successfully updated hero data",
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update hero data",
            err: error
        });
    }
}

const destroy = async (req, res) => {

    try {
        console.log(req.params.id)
        const response = await heroService.deleteHero(req.params.id);
        console.log(response);

        return res.status(202).json({
            data: response,
            success: true,
            message: "successfully deleted hero data",
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a hero",
            err: error
        });
    }
}

module.exports = {
    create, 
    get,
    getAll,
    update,
    destroy
}