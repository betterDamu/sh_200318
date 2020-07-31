db.account.find()

db.account.insert({name2:"达姆"})

db.account.remove({_id:ObjectId("5f21177eea9f2d281cfd5d47")})


//普通字段
db.account.update({age:41},{name:"刘渊1"}) //全量更新
db.account.update({_id:"123abc"},{$set:{name:"张弛",age:"21"}}) //局部更新
db.account.update({_id:"123abc"},{$set:{info:{brank:"渣打银行"}}}) //局部更新
db.account.update({_id:"123abc"},{$unset:{tuic:"xxx"}}) //局部更新
db.account.update({_id:"123abc"},{$rename:{age:"name"}}) //局部更新
db.account.update({_id:"123abc"},{$rename:{age:"name"}}) //局部更新
db.account.update({_id:"123abc"},{$rename:{"info.brank":"brank"}}) //局部更新
db.account.update({_id:"123abc"},{$inc:{"balance":1000}}) //局部更新
db.account.update({_id:"123abc"},{$mul:{"balance":2}}) //局部更新
db.account.update({_id:"123abc"},{$min:{"balance":1600}}) //局部更新
db.account.update({_id:"123abc"},{$max:{"balance":"1"}}) //局部更新

//数组字段
db.account.update({_id:"123abc"},{$addToSet:{"contact1":"亚洲"}}) //局部更新
db.account.update({_id:"123abc"},{$push:{"contac3":"亚洲"}}) //局部更新
db.account.update({_id:"123abc"},{$addToSet:{"contact":"亚洲"}}) //局部更新
db.account.update({_id:"123abc"},{$push:{"contact":"亚洲"}}) //局部更新

db.account.update({_id:"123abc"},{$addToSet:{"contact":{
    $each:[1,2,3,4]
}}}) //局部更新
db.account.update({_id:"123abc"},{$push:{"contact":{
    $each:["A","B","C"]
}}})
db.account.update({_id:"123abc"},{$push:{"contact":{
    $each:[],
    $position:0,
    $sort:-1,
    $slice:5
}}})



