const UserRepository = require('../repositories/userRepository');
const userRepository = new UserRepository("data/users.json");
 
module.exports =
{
   getUser(req , res)
   {
       const userId = parseInt(req.params.id);
       const user = userRepository.getUserById(userId);
       if(user == null)
       {
           res.status(404).send("404 Not found");
       }
        console.log(user.role)
        console.log(user.fullname)
       res.render('user' , user);
   },
 
   getUsers(req , res)
   {
       //if(req.query.page == null || req.query.size == null)
       //{
       //    res.status(400).send("400 Bad request");
       //}else{
           const page = parseInt(req.query.page);
           const amount = parseInt(req.query.size);
           const offset = (page - 1)*amount;
 
           const users = userRepository.getUsers();
           const new_users = users;//.slice(offset , offset+amount);
           res.render('users' , {new_users , is_users: true,})

       //}
   },
};
