### 拆分静态组件
    new Vue()
        App
            todo-header
            todo-list
                todo-item
            todo-footer

### 确定数据源
    整个数据源应该放在app组件中;因为几乎所有的组件都要依赖这个数据源;
    把数据源放在app中 便于数据的分享与传递
    大量的父向子的数据传递

### 新增待办事项(header)
    子向父的数据传递;使用vue自定义事件的模式实现

### 删除待办事项(item)
    非父子的数据传递;使用总线来实现

### 选中待办事项(item)
    当待办事项被选中时;对应的数据也要合理的产生改变;
    子孙组件不应该直接修改祖先组件的数据;

    v-model脏数据问题; 当v-model后面跟的数据来至于其他组件时;由于
    v-model数据双向绑定的特性;会导致这个来至于其他组件数据产生变化!

    解决脏数据问题:
        将这个来至于其他组件的数据 定义成一个计算属性

### 待办事项的高亮(item)
    v-bind 如何结合 class
    v-bind 如何结合 style

### 待办事项数量的统计(footer)
    计算属性的经典的运用场景;当一个数据依赖于其他数据时;就应该使用计算属性

### 全选全不选(footer)
    全选全不选按钮本身的状态应该如何同步: 计算属性
    点击全选全不选按钮 如何同步list中的代表事项的状态

### 删除已完成的待办事项(footer)

