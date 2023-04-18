import type { App } from 'vue'
import { NoticeBar, Progress, Field, Cell, CellGroup, Form, Button, Toast, Popup } from 'vant';
import { Col, Row, Sticky, Icon } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const registerVant = (app: App) => {
  // 按需引入
  app.use(NoticeBar);
  app.use(Progress);
  app.use(Field);
  app.use(Cell);
  app.use(CellGroup);
  app.use(Form);
  app.use(Button);
  app.use(Toast);
  app.use(Popup);
  app.use(Col);
  app.use(Row);
  app.use(Sticky);
  app.use(Icon);
}

export default registerVant;
