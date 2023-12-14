import { AppstoreOutlined, AudioOutlined, AuditOutlined, CheckCircleOutlined, DeleteOutlined, DeploymentUnitOutlined, DoubleRightOutlined, EditOutlined, FieldStringOutlined, FlagOutlined, ForkOutlined, FormOutlined, GoldOutlined, GroupOutlined, HolderOutlined, InsertRowAboveOutlined, LayoutOutlined, MergeCellsOutlined, PlusCircleFilled, PlusCircleOutlined, ProfileOutlined, SmallDashOutlined, SnippetsOutlined, TagsOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Menu, MenuProps, message } from "antd";
import './menu.css';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

// todo: 优化数据展示，配置权限
const items: MenuProps['items'] = [
  getItem('AI笔记', 'sub1', <FieldStringOutlined />, [
    getItem('AI 帮我写', 'sub11', <EditOutlined />),
    getItem('AI 帮我读', 'sub22', <AudioOutlined />),
  ]),
  getItem('全部笔记', 'allNotes', <SnippetsOutlined />),
  getItem('笔记本', 'NoteBook', <FormOutlined />),
  getItem('标签', 'noteTag', <TagsOutlined />),
  getItem('空间', 'space', <GoldOutlined />),

  getItem('清单 & 日历', 'sub2', <LayoutOutlined />, [
    getItem('日历', 'calendar', <InsertRowAboveOutlined />),
    getItem('四象限', 'fourQuadrant', <AppstoreOutlined />),
    getItem('今天', 'todayList', <FlagOutlined />),
    getItem('未来7天', 'next7Days', <ForkOutlined />),
    getItem('待整理', 'toBeSortedOut', <AuditOutlined />),
    getItem('已完成', 'completedTask', <CheckCircleOutlined />),
    getItem('清单列表', 'sub3', <UnorderedListOutlined />, [
      getItem('新建清单', 'sub4', <PlusCircleOutlined />)
    ]),
  ]),

  { type: 'divider' },

  getItem('文件库', 'documentLibrary', <ProfileOutlined />),
  getItem('模版库', 'noteTemplates', <GroupOutlined />),
  getItem('知识星图', 'knowledgeStarMap', <DeploymentUnitOutlined />),
  getItem('更多', 'sub5', <SmallDashOutlined />),
];

const NoteMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [messageApi, contextHolder] = message.useMessage();
  const [isHovered, setHovered] = useState(false);
  
  const getLocationKey = (): string => {
    return location.pathname.slice(1);
  }
  
  const onClick: MenuProps['onClick'] = (e) => {
    const {key} = e;
    if(!key) return;
    if(key.indexOf('sub') > -1) {
      messageApi.info('积极开发中，请期待！');
      return;
    }
    navigate(`/${key}`);
  }

  return (
    <>
      {contextHolder}
      <div
        className="menu-box"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="create-note">
          <PlusCircleFilled className="add-icon" />
          <span>新建笔记</span>
          <MergeCellsOutlined className="create-type"/>
        </div>
        <Menu
          onClick={onClick}
          selectedKeys={[getLocationKey()]}
          style={{width: 256, background: 'none'}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
        <div className="btn-group flex-row">
          <DeleteOutlined />
          <HolderOutlined />
        </div>
        {
          isHovered && (<div
            className="active-box"
          >
            <DoubleRightOutlined />
          </div>)
        }
      </div>
    </>
  )
}
export default NoteMenu;