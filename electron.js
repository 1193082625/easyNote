const { app, BrowserWindow, dialog, globalShortcut, ipcMain } = require("electron");
const path = require('path');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let win;  // 用来保存主窗口对象的引用

const createWindow = () => {
  win = new BrowserWindow({
    width: 1200,
    height: 760,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  // win.loadURL(`http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`);
  // win.loadURL(`http://localhost:3344/`);

 
  // 生产环境、开发环境，访问的路径不同
  // 开发环境下，我们访问的是 Vite 本地服务
  // 打包之后，我们访问的是 dist 静态文件
  // 所以这里要加个判断
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  } else {
    // 集成网页和 Node.js 后，需要加载
    // 这里接收的网址是指：Vite 启动后，会在本地运行一个服务，把这个服务网址丢进去就行
    // 使用 Vite 自带的环境变量 VITE_DEV_SERVER_HOST
    // 如果是 undefined，就换成 VITE_DEV_SERVER_HOSTNAME
    win.loadURL(`http://localhost:3000/`);

    // 打开调试工具
    win.webContents.openDevTools();

    // 主进程接收渲染进程发来的消息
    ipcMain.on('message', (_, num) => {
      console.log(num, '测试中文');
    });

    // 主进程向渲染进程发送消息
    setTimeout(() => {
      win?.webContents.send('load', {message: 'electron初始化了'});
    }, 5000);
  }
}

app.whenReady().then(() => {
  createWindow();

  // 当 Linux 和 Windows 应用在没有窗口打开时退出了，macOS 应用通常即使在没有打开任何窗口的情况下也继续运行，并且在没有窗口可用的情况下激活应用时会打开新的窗口。
  // 为了实现这一特性，监听 app 模块的 activate 事件。如果没有任何浏览器窗口是打开的，则调用 createWindow() 方法
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  // 监听快捷键
  // globalShortcut.register('ctrl+a', () => {
  //   win?.webContents.send('removeNode', {name: '删除一个节点'})
  // })

  // // 监听快捷键
  // globalShortcut.register('tab+a+b', () => {
  //   win?.webContents.send('addNode', {name: '添加一个节点'})
    
  //   // win?.webContents.send('removeNode', {name: '删除一个节点'})
  // })
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// 监听显示对话框请求
ipcMain.on('show-dialog', () => {
  // 显示对话框
  dialog.showMessageBox({
    type: 'info',
    title: 'Mr. Ma\'s Blog 博主',
    message: '我的 Github 是 https://github.com/changbin1997',
    buttons: ['确定', '取消']
  });
});