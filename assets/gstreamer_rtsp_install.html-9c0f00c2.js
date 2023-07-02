import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as l,a as s,b as e,d,e as a}from"./app-b5401eb7.js";const c={},o=a(`<h2 id="ubuntu-安装搭建-gstreamer-搭建rtsp服务器" tabindex="-1"><a class="header-anchor" href="#ubuntu-安装搭建-gstreamer-搭建rtsp服务器" aria-hidden="true">#</a> ubuntu 安装搭建 gstreamer 搭建RTSP服务器</h2><h3 id="安装依赖库" tabindex="-1"><a class="header-anchor" href="#安装依赖库" aria-hidden="true">#</a> 安装依赖库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> libgstreamer1.0-0 gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-doc gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="源码编译-gst-rtsp-server" tabindex="-1"><a class="header-anchor" href="#源码编译-gst-rtsp-server" aria-hidden="true">#</a> 源码编译 gst-rtsp-server</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> libgstreamer1.0-dev libgstrtspserver-1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>克隆git库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/GStreamer/gst-rtsp-server.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切到1.18分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> gst-rtsp-server/
<span class="token function">git</span> checkout <span class="token number">1.18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./autogen.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> examples
./test-launch <span class="token string">&quot;( videotestsrc ! x264enc ! rtph264pay name=pay0 pt=96 )&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>播放rtsp流</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gst-launch-1.0 playbin <span class="token assign-left variable">uri</span><span class="token operator">=</span>rtsp://127.0.0.1:8554/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="macbook-安装-gstreamer-和-gst-rtsp-server" tabindex="-1"><a class="header-anchor" href="#macbook-安装-gstreamer-和-gst-rtsp-server" aria-hidden="true">#</a> macbook 安装 gstreamer 和 gst-rtsp-server</h2>`,17),p={id:"安装brew",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#安装brew","aria-hidden":"true"},"#",-1),b={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},g=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用brew-安装gstreamer" tabindex="-1"><a class="header-anchor" href="#使用brew-安装gstreamer" aria-hidden="true">#</a> 使用brew 安装gstreamer</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> gstreamer 
brew <span class="token function">install</span> gst-plugins-base 
brew <span class="token function">install</span> gst-plugins-good 
brew <span class="token function">install</span> gst-plugins-bad 
brew <span class="token function">install</span> gst-plugins-ugly 
brew <span class="token function">install</span> gst-libav 
brew <span class="token function">install</span> gst-rtsp-server 
brew <span class="token function">install</span> gst-editing-services 
brew <span class="token function">install</span> gst-devtools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在使用brew安装gstreamer的时候会安装对应版本的python，其安装路径在/opt/homebrew/bin/python3。<br> 在使用的时候要 souce ~/.zshrc。并使用 which python3，检查python路径。</p></div><hr>`,5);function h(v,m){const n=t("ExternalLinkIcon");return i(),l("div",null,[o,s("h3",p,[u,e(" 安装"),s("a",b,[e("brew"),d(n)])]),g])}const _=r(c,[["render",h],["__file","gstreamer_rtsp_install.html.vue"]]);export{_ as default};