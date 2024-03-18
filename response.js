const response =(StatusCode, data,res) =>{
    res.status(StatusCode).json({
    Status_Code: StatusCode,
    datas: data    
    })
}

module.exports = response