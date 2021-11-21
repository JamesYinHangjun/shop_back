import Vue from "vue";
import 'element-ui/lib/theme-chalk/index.css';
// import {
//   Button,
//   Form,
//   FormItem,
//   Input
// } from 'element-ui';
import { Button } from 'element-ui';
import { Form,FormItem } from 'element-ui';
import { Input } from 'element-ui';
// 导入登陆成功弹框提示组件
import { Message } from 'element-ui'

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

Vue.prototype.$message = Message