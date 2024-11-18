const sendToken=(user,statusCode,res)=>{

    if(user && user.getJwTToken()){
        const token=user.getJwTToken()
        if(!token){
            console.log("yes  no token")

        }

        
    const options={
        expires:new Date(Date.now()+process.env.COOKIE_EXPIRES_TIME*24*60*60*1000),
        httpOnly:true
    }

    res.status(statusCode).cookie('token',token,options).json({
        success:true,
        user,
        token
    })
    }
    else{
        console.log('user object is null or undefined')
    }

    
}

module.exports=sendToken