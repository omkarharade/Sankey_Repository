const pool = require('../config/db_config')


class HeroRepository{

    async createHeroData(
        {hero_id,
        name,
        alias,
        maxDefencePower,
        maxAttackPower,
        isCertified,
        governmentAllowance,
        date_introduced}
    ){

        console.log("here")

        const {rows: hero} = await pool.query(
            `INSERT INTO heroes(id, name, alias, max_defence_power, max_attack_power, is_certified, government_allowance, date_introduced)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8)
            returning id, name, maxAttackPower, isCertified`
            [hero_id, name, alias, maxDefencePower, maxAttackPower, isCertified, governmentAllowance, date_introduced]
        );

        return hero[0];
    }

    async getHeroById(id){
        const {rows: hero} = await pool.query(
            `select * from heroes where id = $1`,
            [id]
        );

        return hero[0];
    }

    async getAllHeroesData(){
        const { rows: heroes } = await pool.query("select * from heroes");
        return heroes;
    }

    async deleteHeroData (id){
        const { rows: user} = await pool.query(
            "DELETE FROM heroes where id = $1 returning *",
            [id]
        )

        return user[0];
    }

    async updateHeroData (
        hero_id,
        {name,
        alias,
        maxDefPower,
        maxAttackPower,
        isCertified,
        governmentAllowance,
        date_introduced}, 
    ){

        console.log(typeof maxAttackPower)
        console.log(typeof parseFloat(maxAttackPower))

        const {rows: user} = await pool.query(
            `UPDATE heroes set name = $2, alias = $3, max_defence_power = $4,
            max_attack_power = $5, is_certified = $6, government_allowance = $7,
            date_introduced = $8 where id = $1 
            returning id, name, alias, max_defence_power, max_attack_power,
            is_certified, government_allowance, date_introduced`,
            [hero_id, name, alias, (maxDefPower), (maxAttackPower), isCertified,
            governmentAllowance, date_introduced]

        );

        return user[0];
    }
}
    

module.exports = HeroRepository;