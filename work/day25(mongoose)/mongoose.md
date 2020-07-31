### 安装mongoose
    npm i mongoose

### 连接数据库
    const mongoose = require("mongoose");
    //如果没有对应的数据库 mongoose会选择新建一个
    mongoose.connect("mongodb://localhost:27017/数据库名称",{
       useNewUrlParser: true,
       useUnifiedTopology: true
    });
    //拿到连接对象
    const db = mongoose.connection;
    //如果连接失败
    db.on('error', console.error.bind(console, 'connection error:'));
    //如果连接成功
    db.once('open', console.log.bind(console,"we're connected!"));


### 映射集合(创建Schema)
    //引入mongoose  找到Schema函数
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;
    //创建Schema实例  第一个参数是用来映射集合中一个个字段的对象
    const userSchema = new Schema({
        name:String
    })

### 拿到文档的操作工具(创建model)
    //"user":代表集合的名称
    //userSchema:上一步创建的Schema对象
    const userModel = mongoose.model("user",userSchema);
    module.exports = userModel;
        