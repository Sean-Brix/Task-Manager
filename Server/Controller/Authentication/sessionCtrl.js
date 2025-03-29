export async function openSession(req, res, next){

    try{ 
        req.session.accountID = req.account._id;

        next();
    }
    catch(e){
        console.log('Error on openSession Middle Ware: Session destroyed, Failure in generating session\n\n' + e);
        req.session.destroy((err)=>{
            if(err){
                return res.status(500).json({
                    message: "Function openSession catch error on module sessionController failed to destroy session",
                    authenticated: false
                })
            }
            res.status(500).json({
                message: "Error on openSession Middle Ware: Session destroyed, Failure in generating session",
                error: e,
                authenticated: false
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