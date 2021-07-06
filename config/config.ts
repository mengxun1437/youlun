import { defineConfig } from 'umi'
import routes from './routes.config'
import theme from './theme.config'
import webpack from './webpack.config'

export default defineConfig({
  title: 'test',
  antd: {},
  dva: {
    hmr: true
  },
  targets: {
    ie: 11
  },
  dynamicImport: {
    loading: '@/pages/Loading'
  },
  ignoreMomentLocale: true,
  lessLoader: {
    globalVars: theme
  },
  nodeModulesTransform: {
    type: 'none',
    exclude: []
  },
  routes,
  theme,
  ...webpack
})
