module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    eqeqeq: 'error', // 必须使用 === 和 !==
    'no-nested-ternary': 'error', // 三元表达式不能嵌套
    'react-native/no-inline-styles': 'off', // 关闭内联样式
    'react/display-name': 'off', // 关闭组件必顋有displayName
    '@typescript-eslint/no-unused-vars': 'off', // 关闭未使用变量检测
    curly: 'error', // if 强制换行
  },
};
