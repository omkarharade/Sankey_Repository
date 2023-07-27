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


## Available API Routes

### For Testing (Postman)
- Postman extension can be used for testing !

### [Heroes Routes](#1-hero-routes)
| Routes        | Description           | 
| ------------- |:-------------:|
| [`GET/heroes/`](#a-get-list-of-all-heroes)    |Get list of all Heroes|    
| [`GET/heroes/:heroId`](#b-get-details-of-a-particular-hero)    | Get details of a particular Hero |    
| [`POST/heroes/`](#c-post-a-new-hero)     | Post a new Hero | 
| [`PATCH/heroes/:heroId`](#d-update-a-particular-hero) | Update a particular Hero |
| [`DELETE/heroes/:heroId`](#e-delete-a-particular-hero) |Delete a particular Hero |

## 1. Heroes Routes

### A. Get list of all Heroes.
Send GET request to fetch the list of all heroes...
```
Method: GET 
URL: /heroes/
Produces: application/json
```
  #### Example :
  - **Request** : /heroes/
  - **Response**:
    ````
    {
    "data": [
        {
            "id": 1,
            "name": "Ijuku Midoriya",
            "alias": "DEKU",
            "max_defence_power": 1500,
            "max_attack_power": 3000,
            "is_certified": true,
            "government_allowance": "400000.50",
            "date_introduced": "2023-07-24T15:30:00.000Z",
            "createdAt": "2023-07-27T06:11:52.379Z",
            "updatedAt": "2023-07-27T06:11:52.379Z"
        },
        {
            "id": 2,
            "name": "Yamato Kirishima",
            "alias": "RED RIOT",
            "max_defence_power": 900,
            "max_attack_power": 2000,
            "is_certified": true,
            "government_allowance": "200000.50",
            "date_introduced": "2023-07-24T15:30:00.000Z",
            "createdAt": "2023-07-27T06:11:52.379Z",
            "updatedAt": "2023-07-27T06:11:52.379Z"
        }
    ],
    "success": true,
    "message": "successfully fetched all heroes",
    "err": {}
    }
    ````

### B. Get details of a particular Hero
Send GET request to fetch the data of Hero with given ID...
```
Method: GET 
URL: /heroes/:id/
Produces: application/json
```
  #### Example :
  - **Request** : /heroes/1
  - **Response**:
    ````
    {
    "data": {
        "id": 1,
        "name": "Ijuku Midoriya",
        "alias": "DEKU",
        "max_defence_power": 1500,
        "max_attack_power": 3000,
        "is_certified": true,
        "government_allowance": "400000.50",
        "date_introduced": "2023-07-24T15:30:00.000Z",
        "createdAt": "2023-07-27T06:11:52.379Z",
        "updatedAt": "2023-07-27T06:11:52.379Z"
    },
    "success": true,
    "message": "successfully fetched a hero data",
    "err": {}
    }
    ````

### C. Post a new Hero
Post a new Hero data based on user input

```
Method: POST
URL: /heroes/
```
#### Parameters :
| Field        | Type           |Required  |
| ------------- |:-------------:|:-------:|
| name   | String |Required | 
| alias   | String |    |
| max_defence_power  | Integer |Required | 
| max_attack_power   | Integer |Required |
| is_certified   | Boolean |Required | 
| government_allowance   | Decimal(10,2) |      | 
| date_introduced   | Date |     | 

#### Example :
- **Request:**  `/heroes/`
    

- **Response:**
````
{
    "data": {
        "id": 3,
        "name": "Yamato",
        "alias": "All Might",
        "max_defence_power": 300000,
        "max_attack_power": 600000,
        "is_certified": true,
        "government_allowance": "3500000.00",
        "date_introduced": "2023-07-24T10:00:00.000Z",
        "updatedAt": "2023-07-27T09:13:06.283Z",
        "createdAt": "2023-07-27T09:13:06.283Z"
    },
    "success": true,
    "message": "successfully created a hero",
    "err": {}
}
````
### E. Delete a particular Hero
  The Hero to which the input ID belongs is deleted using this API
```
Method: DELETE
URL: /heroes/:heroId
```
#### Example :
- **Request:**  `/heroes/2`

- **Response:**
````
{
    "data": 1,
    "success": true,
    "message": "successfully deleted hero data",
    "err": {}
}
````    
