const express =  require('express');
const appRouter = express.Router();
const userBL = require('../models/userBL');

appRouter.route('/')
         .get(async function (req,resp)
         {
            let allUsers = await userBL.getAllUsers()

            return resp.json(allUsers);

         });

appRouter.route('/:id')
         .get(async function (req,resp)
         {  
            let id = req.params.id;
            let User = await userBL.getUser(id);

            return resp.json(User);
         });

appRouter.route('/:id')
         .put(async function(req,resp)
         {
             let obj = req.body;
             let id = req.params.id;
     
             let result = await userBL.updateUser(id,obj);
             return resp.json(result);
         })


appRouter.route('/:id')
         .delete(async function (req,resp)
         {
            let id =  req.params.id;
            
            let result = await userBL.deleteUser(id);
            return resp.json(result);

         });

appRouter.route('/')
         .post(async function(req,resp)
         {
             let NewUser = req.body;
             let result = await userBL.addUser(NewUser);
             return resp.json(result);
         })


module.exports = appRouter;
