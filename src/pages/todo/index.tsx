import { List, Switch } from "antd-mobile";
import { PayCircleOutline, SetOutline, UnorderedListOutline } from "antd-mobile-icons";

const Todo = ()=>{
  return <>
    <List header='基础用法'>
      <List.Item>1</List.Item>
      <List.Item>2</List.Item>
      <List.Item>3</List.Item>
    </List>

    <List header='可点击的功能列表'>
      <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
        账单
      </List.Item>
      <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
        总资产
      </List.Item>
      <List.Item prefix={<SetOutline />} onClick={() => {}}>
        设置
      </List.Item>
    </List>

    <List header='复杂布局'>
      <List.Item extra={<Switch defaultChecked />}>新消息通知</List.Item>
      <List.Item extra='未开启' clickable>
        大字号模式
      </List.Item>
      <List.Item description='管理已授权的产品和设备' clickable>
        授权管理
      </List.Item>
      <List.Item title='这里是标题'>这里是主信息</List.Item>
    </List>

    <List header='列表项禁用'>
      <List.Item disabled clickable prefix={<UnorderedListOutline />}>
        账单
      </List.Item>
      <List.Item disabled prefix={<PayCircleOutline />}>
        总资产
      </List.Item>
    </List>
  </>
}

Todo.title = 'TOTO';
Todo.icon = 'toto-icon';
Todo.badge = '5';
export default Todo;
