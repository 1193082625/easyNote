import React, { ReactNode, useState } from 'react';
import Menu from './components/Menu';
import Top from './components/Top';
import Notification from './components/Notification';
import './layout.css'

interface MyLayoutProps {
  children: ReactNode
}

const MyLayout:React.FC<MyLayoutProps> = ({ children }) => {
  const [isLogin] = useState(false);

  return (
    <div className='flex-row'>
      <Menu />
      <div className='flex-column flex1'>
        <Top/>
        {
          isLogin ? null : <Notification/>
        }
        { children }
      </div>
    </div>
  );
};

export default MyLayout;