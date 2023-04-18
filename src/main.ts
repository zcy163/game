import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import registerVant from '@/plugs/registerVant';
import registerElementPlus from '@/plugs/registerElementPlus';
import mitt from 'mitt';
import pinia from '@/stores/index';
import { registerIcons } from '@/utils/common'
import '@/styles/index.scss'

const start = async () => {

  const app = createApp(App);

  app.use(router);
  app.use(pinia);

  registerVant(app);  // 注册vant
  registerElementPlus(app);  // 注册ElementPlus

  // 全局注册
  registerIcons(app) // icons

  app.mount('#app');

  app.config.globalProperties.eventBus = mitt();

}

start();
