import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import { Form } from 'element-ui'
import { FormItem } from 'element-ui'
import {
  Button
} from 'element-ui'
import {
  Input
} from 'element-ui'
import {
  Message
} from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 把这个弹框组件挂载到Vue.message中
Vue.prototype.$message = Message

