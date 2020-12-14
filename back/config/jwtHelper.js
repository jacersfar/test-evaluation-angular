const jwt = require('jsonwebtoken');

module.exports.verifyJwtToken = (req,res,next) => {
    var token;
    console.log(req.headers['token']);
    token=req.headers['token'];
        if (!token)
        {   return res.send({ auth: false, message: 'No token provided.'}); }
         else 
        {
                jwt.verify(token, process.env.SECRET,
                    (err,decoded) => {
                        if (err)
                            return res.send({auth: false, message: 'Token authentication failed.'});
                        else {
                            next();
                    }
                });
        }
    
    
}

