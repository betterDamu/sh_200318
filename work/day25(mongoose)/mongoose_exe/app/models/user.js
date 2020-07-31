const mongoose = require("mongoose");
//用来映射集合的
const Schema = mongoose.Schema;
const userSchema = new Schema({
    //代表这数据库中集合的一个个字段
    name:String
})
const userModel = mongoose.model("userxxx",userSchema);
module.exports = userModel;