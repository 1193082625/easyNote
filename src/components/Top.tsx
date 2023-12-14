import { BellOutlined, DesktopOutlined, LeftOutlined, RightOutlined, SearchOutlined, SyncOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import photo from '../assets/imgs/photo.jpg';
import './top.css';
import { useNavigate } from "react-router-dom";

function Top() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // 后退
  }
  const handleGoForward = () => {
    navigate(1); // 前进
  }
  return (
    <div className="top-box flex-row row-center">
      <div className="do-undo">
        <LeftOutlined onClick={handleGoBack} className="undo" />
        <RightOutlined onClick={handleGoForward} />
      </div>
      <div className="flex-row row-center top-right">
        <SyncOutlined className="icon" />
        <Input
          className="search"
          size="small"
          placeholder="搜索笔记"
          prefix={<SearchOutlined />}
        />
        <BellOutlined className="icon" />
        <DesktopOutlined className="icon" />
        <img src={photo} className="user-photo" alt="logo" />
        <Button size="small" className="upgrades" icon={<ThunderboltOutlined />}>升级</Button>
      </div>
    </div>
  )
}
export default Top;