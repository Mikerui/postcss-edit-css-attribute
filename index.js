/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = []) => {
  // Work with options here
  return {
    postcssPlugin: 'postcss-edit-css-attribute',
    Root(root) {
      // Transform CSS AST here
      // 转化CSS 的功能代码
      return root.walkDecls((decl) => {
        if (opts.length > 0) {
          opts.forEach(options => {
            const { name, currentValue, resultValue } = options
            if (!name || !currentValue || !resultValue) {
              throw '传入的参数有误'
            }
            const { prop, value } = decl
            // 当传入的额字段名和原始值匹配的时候，修改
            if (prop === name && value === currentValue) {
              decl.value = resultValue
            }
          })
        }
      })
    },
    // Declaration (decl, postcss) {
    //   // The faster way to find Declaration node
    // }


    // Declaration: {
    //   'font-size': (decl, postcss) => {
    //     // console.log(decl.prop, 'decl')
    //     // The fastest way find Declaration node if you know property name
    //   }
    // }
  }
}

module.exports.postcss = true
