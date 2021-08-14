const authUser= asyncHandler(async(req,res)=>{
   const user = await User.findOne({email})

   if (user&& (await user.matchPassword(password))){
       res.json({
           _id : user._id,
           name: user.name,
           email : user.email,
           token : generateToken(user._id), 
           isAdmin : user.isAdmin

       })

   } else {
       res.status(401)
       throw new Error("not authorized , user name and password is wrong")

   }
})


//@desc register a new user
//@route post/ api/ users
//@access public



const createUser = asyncHandler(async(req, res)=>{
    const {name, password, email} = req.body
   const userExist = await User.findOne({email})

   if ( userExist && ( await User.matchPassword({password}))){
       res.status(400)
       throw new Error ("user exist")

   }

   const user =  await User.create({
       name,
       email,
       password,
   })

   if(user) {
       res.status(201).json({
           _id : user._id,
           name : user_name,
           email: user.email,
           token : generateToken(user._id),
           isAdmin : user.isAdmin,



       })
   } else {
       res.status(400)
       throw new Error('something went wrong')
   }

})

const getUserDetails = asyncHandler(async(req, res)=>{ 
    const user = await User.findById(req.params._id)

    if (user){
        res.json ({
            _id : user._id,
            name: user_name,
            email: user.email,
            token: generateToken(user._id)
        })
        
    } 



})