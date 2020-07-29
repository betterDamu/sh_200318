### 安装mongodb服务

### 安装mongodb客户端
    ctrl + t : 新开一个面板

### 什么是mongodb
    mongodb本质上来讲是一个数据库管理系统

### 数据库基本概念(mongodb)
    mongodb:数据库管理系统
        database:数据库
            collection:集合
                document:文档

###  database(CRUD)
        C(创建数据库) : use 不存在的数据库名字
        R(查询数据库) :
            db :查询当前处于哪一个数据库中
            show dbs:查询所有的数据库列表(不包含空的数据库)
        U(切换数据库) : use 存在的数据库名字
        D(删除数据库) : db.dropDatabase()

### collection(CRD)
        C(创建集合) : db.createCollection("user")
        R(查询数据库里的所有集合) : show collections
        D(删除对应的集合): db.users.drop()

### document(CRUD)
