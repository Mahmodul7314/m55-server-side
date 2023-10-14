/**
 * --------------------
 * Mongodb Connection
 * ---------------------
 * 
 * 1. create account
 * 2. create an user with password
 * 3. whitelist IP address
 * 4. dtabase> connect > driver > Node > view full code
 * 5. change the password the uri (paste server side)
 * 
 * 
 * ---------------------------
 * 1. CEATE----POST
 * 2. app.post ('/users'/ async (req, res) => {})
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. access data from the body: const user = req.body
 * 6. const result = await haiku.insertone(user);
 * 7. res.send(result)
 * 
 * CLIENT SIDE
 * 1. create fetch
 * 2. add second parameter as an object
 * 3. provide method: 'POST'
 * 4.add headers: {'content-type' : 'application/json'}
 * 5. add body: JSON.Stringify(user)
 * 
 * 
 * 
 * 
 * --------------------------------
 * Read Many
 * -------------------------------------
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * CLient side a fetch kore
 * dekhai diyeci
 * 
 * ----------------------------------------
 * DELETE
 * ------------------------------------
 * 1. Create app.delete('/users/:id', async(req, res) =>{})
 * 2.specify unique objectId to delete the right user
 * 3. const query = {_id: new objectId(id)}
 * 4.const result = await userCollection.deleteone(query);
 * 
 * 
 * CLIENT SIDE
 * 1. create dynamic url with id
 * 2.mention the DELETE method
 * 
 * 
 * 
 * 
 * 
 * 
 */