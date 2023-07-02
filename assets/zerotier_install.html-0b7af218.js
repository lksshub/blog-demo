import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as a,c as l,a as e,b as r,d as t,e as s}from"./app-b5401eb7.js";const c="/blog-demo/img/note_taking/zerotier_pkg.png",_="/blog-demo/img/note_taking/zerotier_creat_net.png",d={},h=e("h2",{id:"异地组网技术-zerotier",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#异地组网技术-zerotier","aria-hidden":"true"},"#"),r(" 异地组网技术 zerotier")],-1),p=e("p",null,"ZeroTier是一种基于虚拟专用网络（VPN）技术的软件定义网络（SDN）解决方案，可以帮助用户在不同地理位置的设备之间建立安全的局域网。它提供了一种简单且安全的方法来创建和管理虚拟网络，无论设备位于何处，都可以通过ZeroTier组网。",-1),g=e("p",null,[e("strong",null,"下面是ZeroTier异地组网的基本逻辑：")],-1),u=e("h3",{id:"_1-安装和配置zerotier",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-安装和配置zerotier","aria-hidden":"true"},"#"),r(" 1. 安装和配置ZeroTier：")],-1),f={href:"https://www.zerotier.com/",target:"_blank",rel:"noopener noreferrer"},m=s('<figure><img src="'+c+'" alt="在需要组网的设备上安装ZeroTier程序" tabindex="0" loading="lazy"><figcaption>在需要组网的设备上安装ZeroTier程序</figcaption></figure><h3 id="_2-创建网络" tabindex="-1"><a class="header-anchor" href="#_2-创建网络" aria-hidden="true">#</a> 2. 创建网络：</h3><p>在ZeroTier的管理界面中，你可以创建一个虚拟网络，并为该网络分配一个唯一的网络ID。这个网络ID将用于标识你的虚拟网络。</p><figure><img src="'+_+'" alt="创建一个唯一的虚拟网络" tabindex="0" loading="lazy"><figcaption>创建一个唯一的虚拟网络</figcaption></figure><h3 id="_3-加入网络" tabindex="-1"><a class="header-anchor" href="#_3-加入网络" aria-hidden="true">#</a> 3. 加入网络：</h3>',5),T={href:"https://blog.csdn.net/kai3123919064/article/details/109662499",target:"_blank",rel:"noopener noreferrer"},Z=e("ol",{start:"4"},[e("li",null,[e("p",null,"网络配置：在ZeroTier管理界面中，你可以配置网络的各种设置，例如子网分配、防火墙规则和路由设置。这些设置将影响到网络中各个设备之间的通信方式。")]),e("li",null,[e("p",null,"设备通信：一旦设备成功加入网络并配置完毕，它们之间就可以建立安全的点对点连接。ZeroTier使用加密技术来保护设备之间的通信，确保数据的安全性和完整性。")]),e("li",null,[e("p",null,"可选的高级配置：ZeroTier还提供了一些高级配置选项，例如流量限制、流量路由和多路径连接。这些选项可以根据具体需求进行调整，以优化网络性能和安全性。")])],-1),b=e("p",null,"需要注意的是，ZeroTier并不是一个传统意义上的VPN，它更类似于一个虚拟的局域网。它通过创建一个虚拟网络层，将不同地理位置的设备连接在一起，使它们能够直接通信，就像它们连接在同一物理网络上一样。这种方法可以帮助用户轻松地实现设备之间的远程访问和协作，无需担心网络设置或复杂的端口转发配置。",-1);function x(z,k){const o=n("ExternalLinkIcon");return a(),l("div",null,[h,p,g,u,e("p",null,[r("首先，你需要在要连接的每台设备上安装ZeroTier应用程序，可以去"),e("a",f,[r("ZeroTier官网"),t(o)]),r("下载，并创建一个ZeroTier账户。")]),m,e("p",null,[r("在每个设备上，你需要输入虚拟网络的网络ID，并在ZeroTier应用程序中选择加入网络。一旦设备成功加入网络，它们就可以通过ZeroTier建立安全的连接，"),e("a",T,[r("参考"),t(o)]),r("。")]),Z,b])}const I=i(d,[["render",x],["__file","zerotier_install.html.vue"]]);export{I as default};
