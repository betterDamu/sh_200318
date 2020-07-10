### url
    http://user:pass/a/b/c?name=damu#123

### $route
    任意一个路由组件 都可以通过this.$route这个属性  来访问到当前路由对象
    可是vue-router不建议在模板中直接使用 $route; 因为这样会让组件和vue-router
    产生深度耦合;一旦有了耦合;当前这个组件就没有离开vue-router

### props配置
    实现解耦

### 路由配置
    path        : 决定路由组件对应的路径
    component   : 路由组件
    redirect    : 重定向(String path)
    children    : 子路由
    props       : 给对应的组件提供props数据的

### 路由器的配置
    routes   : 对应的路由数组
    mode     : 路由模式
        hash模式 : 兼容性比较强;但是在很多场景下有问题(比如支付)
        history模式 : 兼容性没那么强;但是几乎支持所有场景(支付 分享)
                        静态资源少用相对路径!
        linkActiveClass : 给对应的导航加class 模糊的匹配
        linkExactActiveClass: 给对应的导航加class 精确的匹配