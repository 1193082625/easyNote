// config-overrides.js

const { override, addLessLoader, fixBabelImports } = require('customize-cra');

module.exports = override(
  // 添加 Less 支持
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        // 你的 Less 变量配置（如果有）
      },
    },
    // 保留 postcssOptions 的配置，可以根据需要添加其他插件
    postcssOptions: {
      plugins: [
        require('postcss-normalize')(),
        // 其他 PostCSS 插件
      ],
    },
  }),
  // 按需加载 Ant Design 组件
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
);
