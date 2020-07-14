//对Object对象进行深度冻结
Object.deepFreeze = function (obj) {
    var propsNames = Object.getOwnPropertyNames(obj)

    propsNames.forEach(function (key) {
        var val = obj[key];
        //可以安全的确定val肯定是一个 Object对象
        if(Object.prototype.toString.call(val) === "[object Object]"){
            Object.deepFreeze(val)
        }else {
            throw new Error("第一个参数不是一个Object对象")
        }
    })
    
    return Object.freeze(obj)
}
//让我们定义的deepFreeze方法不可枚举
Object.defineProperty(Object,"deepFreeze",{
    enumerable:false
})
//让Object.prototype的toString方法 变的不能修改
Object.defineProperty(Object.prototype,"toString",{
    writable:false
})
