import { Button } from "antd";

function Notification() {
  return (
    <div className="notification">
      <span>您的会员权益已经到期 ｜ 现在续费，立即重获专属权益</span>
      <Button size="small" className="buy">点击速抢</Button>
    </div>
  )
}
export default Notification;