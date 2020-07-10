### url
    http://user:pass/a/b/c?name=damu#123

### $route
    任意一个路由组件 都可以通过this.$route这个属性  来访问到当前路由对象
    可是vue-router不建议在模板中直接使用 $route; 因为这样会让组件和vue-router
    产生深度耦合;一旦有了耦合;当前这个组件就没有离开vue-router