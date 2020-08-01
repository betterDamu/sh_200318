const {addUser,getAllUser,getUserById,
    updateUserById,delUserById,login} = require("../controllers/user")
module.exports=function (router) {
    //用户注册对应的路由
    router.post("/add",addUser)
    //用户登录对应的路由
    router.post("/login",login)
    router.get("/getAll",getAllUser)
    router.get("/getUser/:id",getUserById)
    router.put("/updateUser/:id",updateUserById)
    router.del("/delUser/:id",delUserById)
}