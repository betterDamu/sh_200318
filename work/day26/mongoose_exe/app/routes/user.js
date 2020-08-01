const {addUser,getAllUser,getUserById,
    updateUserById,delUserById,login,avatar} = require("../controllers/user")
const {auth,access} = require("../middlewares/index")
module.exports=function (router) {
    //用户注册对应的路由
    router.post("/add",addUser)
    //用户登录对应的路由
    router.post("/login",login)
    //用户上传头像的路由
    router.post("/:id/avatar",auth,access,avatar)

    router.get("/getAll",getAllUser)
    router.get("/getUser/:id",getUserById)
    router.put("/updateUser/:id",updateUserById)
    router.del("/delUser/:id",delUserById)
}