# My Hero Academia Backend

## Hero table Schema

- hero_id (primary_key), unique, not null, integer
- name, not null, varchar(30)
- alias, varchar(15)
- max_defence_power, double precision
- max_attack_power, not null, double precision
- date_introduced, timestamp
- is_certified_hero, not null, boolean
- government_allowance, money

