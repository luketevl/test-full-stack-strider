# Server
- nodejs
- express
- moongose

## Install the mongodb and RUN
- Example
  - https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/

## Install dependencies
```
npm install
```

## Run server
- listen
  -  http://localhost:595
```
npm start
```
case if you have any problem use:
```
nodejs server
```

## Notations
- Delete verb
  - http://localhost:595/api/v1/todo/paramID
- Get verb
  - http://localhost:595/api/v1/todo/
- Post verb
  - http://localhost:595/api/v1/todo/
  - inputs
      - _name_: **String**
      - _checked_: **boolean**
- Put verb
  - http://localhost:595/api/v1/todo/
  - inputs
      - _name_: **String**
      - _checked_: **boolean**
      - __ _id __: **String**

### Observations
- CORS **enabled**
- Case have an problem to starter the **mongo** database use:
```
mongod --dbpath <local user path>
```
- Case have problem to upload image set your **/tmp** folder to 777
   - Error reference
  > errno: -2,
    code: 'ENOENT',
