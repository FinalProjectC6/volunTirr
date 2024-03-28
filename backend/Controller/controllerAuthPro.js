const{Providers}=require('../database/index.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {addprovider}=require('./controllerprovider.js')


console.log(Providers,'usersssssssssssssssss');

const generateToken = (id, fullname) => {
    const expiresIn = 60 * 60 * 24
    return jwt.sign({ id, fullname }, "process.env.ACCESS_TOKEN_SECRET", { expiresIn: expiresIn });
  };

 const RegisterPro = async (req, res) => {
   const { fullname,  email_address, password } = req.body;
   console.log('name',fullname);
   try {
     const hashedPassword = await bcrypt.hash(password, 10);
  
     const newUser = {
       fullname,
        email_address,
        image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        password :hashedPassword}
       
        addprovider({ body: newUser }, res);
    } catch (error) {
     
      res.status(500).json({ error: 'Error' });
    }
  };









  

  const LoginPro = async(req, res) => {
    const{email_address,password}=req.body;
    try {
        const result= await Providers.findOne({ where :{email_address:email_address}})


        if(result ===null) res.send("email not found")
         else {
          const verif=result.dataValues.password
          const passwordMatch = await bcrypt.compare(password,verif)
          if(passwordMatch){

             const token=generateToken(result.dataValues.id,result.dataValues.email_address)  
             result.dataValues.token=token
            res.send(result.dataValues)
          }
          else{ 
            res.send("password wrong")
          }
          
      }
    
    }
    catch (error) {res.status(500).json(error)}
}






  module.exports={RegisterPro , LoginPro}
