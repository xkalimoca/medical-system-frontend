const moongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    userId:{
        type:String,
    },
    username: {
        type: String,
        required:[true,'username is required']
    },
    Nombre: {
        type: String,
        required:[true,'Nombre is required']
    },
    Apellido:{
        type: String,
        required:[true,'Apellido is required']
    },
    Correo:{
        type:String,
        required:[true,'Correo no is required']
    },
    Telefono:{
        type:String,
        required:[true,'Telefono is required']
    },
    Especialidad:{
        type:String,
        required:[true,'Especialidad is required']
    },
    Clinica:{
        type:String,
        required:[true,'Clinica is required']
    },
    feesPerCunsalation:{
        type:Number,
        required:[true,'fees is required']
    },
    timings: {
        type: Object,
        required:[true,'work timing is required']
    },
},{timestamps:true}
);

const doctorModel = mongoose.model('users', doctorSchema)
module.exports = doctorModel