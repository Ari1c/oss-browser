<<<<<<< HEAD
## OSS Browser调试主进程和渲染进程

开发者如果是通过本地编译github仓库生产的oss browser工具，想要进行主进程和渲染进程相关代码的调试可以参考文档
=======
## OSS Browser 调试主进程和渲染进程

开发者如果是通过本地编译 github 仓库生产的 oss browser 工具，想要进行主进程和渲染进程相关代码的调试可以参考文档
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5

### 调试主进程

1. 启动调试端口

```javascript
make debug

```
<<<<<<< HEAD
=======

>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
运行如下图:

![debug](https://img.alicdn.com/tfs/TB15Da3ikPoK1RjSZKbXXX1IXXa-1146-184.png)

<<<<<<< HEAD
2.配置vscode调试参数
=======
2.配置 vscode 调试参数
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5

```javascript
 {
    "name": "Attach",
<<<<<<< HEAD
    "type": "node", 
    "request": "attach", 
    "port": 5858, 
    "sourceMaps": false, 
    "outFiles": null, 
    "localRoot": "${workspaceRoot}", 
    "remoteRoot": null, 
    "address": "localhost"
  } 
```

3. 选中配置Attach,并单击调试按钮
=======
    "type": "node",
    "request": "attach",
    "port": 5858,
    "sourceMaps": false,
    "outFiles": null,
    "localRoot": "${workspaceRoot}",
    "remoteRoot": null,
    "address": "localhost"
  }
```

3. 选中配置 Attach,并单击调试按钮
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5

![run](https://img.alicdn.com/tfs/TB1QoTiihnaK1RjSZFtXXbC2VXa-1936-1090.jpg)

### 调试渲染进程

<<<<<<< HEAD
调试渲染进程打开调试控制台面板调试即可。开发模式启动下自动打开devtools。生产模式下需要连续单击左上角icon10次调出调试面板。在`source`tab目录选择加载的资源，在业务逻辑处打上断点即可。如下图:
=======
调试渲染进程打开调试控制台面板调试即可。开发模式启动下自动打开 devtools。生产模式下需要连续单击左上角 icon10 次调出调试面板。在`source`tab 目录选择加载的资源，在业务逻辑处打上断点即可。如下图:
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
![debugging](https://img.alicdn.com/tfs/TB16pO3icfpK1RjSZFOXXa6nFXa-2440-1400.jpg)

### 主进程和渲染进程通信调试

<<<<<<< HEAD
electron主进程和渲染进程通信的方式目前是通过`ipc`通信，通过事件机制进行相互通信，只需要把断点打在主进程和渲染进程事件监听的地方即可
=======
electron 主进程和渲染进程通信的方式目前是通过`ipc`通信，通过事件机制进行相互通信，只需要把断点打在主进程和渲染进程事件监听的地方即可
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
