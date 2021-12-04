# Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
增加修改任意css属性值为指定值的插件
插件接收一个数组，可以修改多个值
```js
 [
  {
    name: 'font-size', // 修改的css属性
    currentValue: '12px', // 当前的值
    resultValue: '14px'   // 修改之后的值
  },
   {
    name: 'color', // 修改的css属性
    currentValue: '#000', // 当前的值
    resultValue: 'red'   // 修改之后的值
  },
 ]

```
