// theme-without-fonts: skips the default Inter font in favour of bundled Roboto Flex
import DefaultTheme from 'vitepress/theme-without-fonts'
import '@fontsource-variable/roboto-flex/wdth.css'
import './palette.css'
import './style.css'
import Home from './Home.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Home', Home)
  }
}
