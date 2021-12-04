const postcss = require('postcss')

const plugin = require('./')

async function run(input, output, opts = [
  {
    name: 'font-size', // 修改的css属性
    currentValue: '12px', // 当前的值
    resultValue: '14px'   // 修改之后的值
  }
]) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)

  expect(result.warnings()).toHaveLength(0)
}

//  Write tests here
it('does something', async () => {
  await run('a{ font-size: 12px }', 'a{ font-size: 14px }')
})

//  Write tests here
it('does something2', async () => {
  await run('a{ font-size: 12px }', 'a{ font-size: 14px }')
})