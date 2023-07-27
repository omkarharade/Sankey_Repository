# My Hero Academia Backend

Basic RESTful api for Heroes where you can add/delete data of heroes.

## Guardian table Schema

- hero_id (primary_key), unique, not null, integer
- name, not null, varchar(30)
- alias, varchar(15)
- max_defence_power, double precision
- max_attack_power, not null, double precision
- date_introduced, timestamp
- is_certified_hero, not null, boolean
- government_allowance, money


|Key| Field Name          | Data Type       | Allow Null | Description                     |
|---|---------------------|---------------------|------------|---------------------------------|
|PK | id                  | INTEGER         | No         | The name of the Hero           |
|   | name                | VARCHAR(30)     | No         | The name of the Hero           |
|   | alias               | VARCHAR(15)     | Yes        | Alias / Hero Name of the Guardian       |
|   | max_defence_power   | INTEGER         | No         | Maximum Defense Power  of Hero         |
|   | max_attack_power    | INTEGER         | No         | Maximum Attack Power of Hero           |
|   | is_certified        | TINYINT(1)      | No         | Status whether Hero is Certified by the Government         |
|  | government_allowance| DECIMAL(10,2)   | Yes        | Government allowance provided to the Hero           |
|  | date_introduced     | TIMESTAMP       | Yes        | Date when the hero was introduced |