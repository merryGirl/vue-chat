/* eslint-disable prettier/prettier */
import Vue from 'vue'

import {
  Pagination,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Button,
  ButtonGroup,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Loading,
  MessageBox,
  Message,
  form,
  formItem,
  timeline,
  timelineItem,
  Table,
  TableColumn
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(form);
Vue.use(formItem);
Vue.use(timeline);
Vue.use(timelineItem);
Vue.use(Table);
Vue.use(TableColumn);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
