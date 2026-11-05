# 如何理解代理 IP 是什么

- 首先必须说明：代理 IP**≠** VPN


## 代理 IP

::: danger 代理 IP不是用来翻墙的！！
:::

- 代理 IP通常是socks5、HTTP协议，也有HTTPS协议

- 代理 IP用途非常多，在跨境电商方面主要用于分隔多个账号，防止相互关联。
    
    代理 IP不等于通俗所说的翻墙节点，因为socks5/http等协议不具备规避网络监管的能力。

    如果你发现某个socks5代理 IP可以直接使用，不需要开VPN。这也只是偶然的漏网之鱼，不能长久稳定使用。

- 必须配合VPN和机场订阅等海外节点才能稳定使用代理 IP


## VPN

- VPN 通常是由商家集成整合为一个完整的用户端软件，例如letsvpn

- 大部分人使用的是机场订阅，商家会提供一个订阅链接地址，由你自己导入到各类工具

    机场订阅链接示例：https://sub.abcdeg.com:1234/wokaozhesha/token=1234567890987654321

- 订阅链接配置在各类代理工具内
  PC：Clash Verge、v2rayN等
  Android：v2rayNG、Clash for Android、Nekobox等
  IOS：shadowrocket等
