import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const registerElementPlus = (app: App) => {
  app.use(ElementPlus);
}

export default registerElementPlus;
