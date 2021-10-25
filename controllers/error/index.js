


exports.ErrorController = async  ( err , req , res , next )=> {
    const msg = err.message
    const detail = err.detail
    return res.status(err.status).json({msg,detail})
}
