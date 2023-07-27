# My Hero Academia Backend

Basic RESTful api for Heroes where you can add/delete data of heroes.

## Guardian table Schema



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


#### INSTALLATION INSTRUCTIONS
-   Clone or download the repo. into your local system.
-   Cd into that root folder you just cloned locally.
-   install all dependencies which are written in the packet.json file, type
    ```
    npm install
    ```
-   Now typing
    ```
    npm start
    ```
    will start a server !
    
    App should now be running on **localhost:3000**
         
### Dependencies 
 - For dependencies refer Package.json


### For Testing (Postman)
- Postman extension can be used for testing !