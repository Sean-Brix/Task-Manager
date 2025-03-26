
export async function openSession(req, res, next){

    try{ 
        req.session.account = req.account;
        req.session.authenticated = true;
        next();
    }
    catch(e){
        req.session.destroy((err)=>{
            if(err){
                return res.status(500).json({
                    message: "Function openSession catch error on module sessionController failed to destroy session"
                })
            }
            res.status(500).json({
                message: "Error on openSession Middle Ware: Session destroyed, Failure in generating session",
                error: e
            })
        });
    }
} 

export async function destroySession(req, res, next){
    try {
        req.session.destroy((err)=>{
            if(err){
                throw new Error(err)
            }

            res.clearCookie('connect.sid');
            console.log("session Destroyed");
            next()
        })
    } 
    catch (e){
        res.status(500).json({
            message: "Error on destroySession Middle Ware: Session could not be destroyed, Failure in restarting session",
            error: e
        })
    }
}