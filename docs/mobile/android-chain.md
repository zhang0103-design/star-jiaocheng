# Android 手机链式代理配置教程

::: tip 适用环境
- 平台：Android
- 客户端：NekoBox（基于 sing-box 的免费开源代理客户端）
:::

## 链式代理是怎么工作的

先理解三个角色，操作时才不会填错：

```text
手机
 ↓
第一跳代理（机场节点 · 负责出海）
 ↓
第二跳代理（代理 IP · 最终出口）
 ↓
目标网站
```

- **第一跳**：机场节点，负责把流量「送出海」。
- **第二跳**：代理 IP，负责作为最终出口。
- **出口 IP**：目标网站最终看到的 IP，等于第二跳的代理 IP。

## 操作前准备

1. **代理 IP 信息**：IP、端口、用户名、密码（协议为 SOCKS5）。
2. **机场订阅链接**：用于第一跳出海。

## 第一步：认识 NekoBox 界面

打开 NekoBox，这是它的主界面：

![NekoBox 主界面](/images/android/step-01-home.png)

点开底部菜单，可以看到主要功能入口，我们主要用到「分组」：

![底部菜单](/images/android/step-02-menu.png)

## 第二步：添加两个分组

进入「分组」页面，初始只有一个空的「未分组」：

![分组页初始状态](/images/android/step-03-groups-empty.png)

需要添加两个分组：一个放代理 IP，一个放机场（海外网络）。

先添加第一个分组，分组类型选「基本」，其余保持默认，右上角确认：

![添加分组](/images/android/step-04-group-settings.png)

再添加第二个分组，分组类型选「订阅」，在「订阅链接」处粘贴你的机场订阅链接地址：

![粘贴订阅链接](/images/android/step-05-subscription-link.png)

::: tip 导入订阅的其它方式
除了粘贴订阅链接，还可以用「扫描二维码」或「从剪切板导入」。购买机场订阅的网站一般有二维码，可直接扫码导入。

![订阅导入方式](/images/android/step-09-import.png)
:::

完成后，主界面会出现两个分组：

![两个分组](/images/android/step-06-two-groups.png)

## 第三步：添加代理 IP（第二跳）

在「代理 IP」分组里，选择「手动输入」，再选「SOCKS」：

![手动输入 SOCKS](/images/android/step-07-manual-socks.png)

填写服务器配置：版本选 **SOCKS5**，服务器填你的代理 IP，端口填你的端口，用户名、密码按服务商提供的信息填写。

> 图中服务器 `127.0.0.1`、端口 `1080` 是新建配置时的默认值，需改成你自己的代理 IP 和端口。

![填写服务器配置](/images/android/step-08-server-config.png)

## 第四步：配置链式关系（关键）

回到分组页，确认两个分组各有一个配置：

![两个分组各一个配置](/images/android/step-10-groups-one-each.png)

进入「代理 IP」分组的设置：

![代理 IP 分组设置](/images/android/step-11-group-proxyip.png)

找到「**前置代理**」，选择机场分组里的节点（示例为「梯子A」）。这样流量会**先经机场节点出海，再经代理 IP 出口**：

![设置前置代理](/images/android/step-12-preproxy.png)

## 第五步：启动代理

回到主界面，选中 SOCKS5 配置，点击图标连接，测试延迟。状态变为「连接成功」即链路正常：

![连接测试](/images/android/step-13-connect.png)

## 第六步：测试最终出口 IP

打开任意 IP 查询网站（如 ip2location.com），页面显示的 IP 应与你的代理 IP 一致：

![验证出口 IP](/images/android/step-14-check-ip.png)

## 视频演示

完整操作演示视频：

<video controls playsinline preload="metadata" style="width:100%; aspect-ratio:16/9; border-radius:8px;">
  <source src="/videos/android-demo.mp4" type="video/mp4" />
  当前浏览器不支持视频播放。
</video>

## 常见错误

- **出口 IP 不对**：前置代理选错，或第一跳 / 第二跳顺序颠倒。
- **认证失败**：SOCKS5 用户名、密码填错，或协议选成了 HTTP。
- **连接超时**：代理 IP 或端口填错。
