const defaultHeight = '32px'

export default {
  // common
  '@text-color': '#333',
  // '@primary-color': '#1890ff',
  // menu
  '@menu-collapsed-width': '45px',
  // form
  '@form-item-margin-bottom': '24px',
  // button
  '@btn-height-base': defaultHeight,
  // input
  '@input-height-base': defaultHeight,

  // 下面的为项目自定义变量
  // 为了防止与 antd 冲突，变量名必须以 ms 开头
  'ms-primary-color': '#26c9d8',
  'ms-background-color': '#e1f7f8',
  'ms-steps-color': '#ddd',

  'ms-border-color': '#e7ecf1',
  'ms-text-color': '#333',

  'ms-white': '#fff',
  'ms-gray': '#666',
  'ms-blue': '#337ab7',

  'ms-level-serious': '#ad194e',
  'ms-level-high': '#ff1939',
  'ms-level-middle': '#ff6f39',
  'ms-level-low': '#f5d70d',
  'ms-level-common': '#199bff',

  'ms-blue-button-color': '#5e9fe9',
  'ms-blue-button-hover-color': '#1c72d5'
}
