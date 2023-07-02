import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as p,a as n,b as i,d as c,e as o}from"./app-b5401eb7.js";const l={},u=o(`<h2 id="使用-imagezmq-传输视频流" tabindex="-1"><a class="header-anchor" href="#使用-imagezmq-传输视频流" aria-hidden="true">#</a> 使用 imagezmq 传输视频流</h2><h3 id="视频流发送端" tabindex="-1"><a class="header-anchor" href="#视频流发送端" aria-hidden="true">#</a> 视频流发送端</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> imutils<span class="token punctuation">.</span>video <span class="token keyword">import</span> VideoStream
<span class="token keyword">import</span> imagezmq
<span class="token keyword">import</span> socket
<span class="token keyword">import</span> cv2

<span class="token comment"># 创建VideoCapture对象，参数0表示使用默认的摄像头</span>
cap <span class="token operator">=</span> cv2<span class="token punctuation">.</span>VideoCapture<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">#ubuntu 的ip</span>
sender <span class="token operator">=</span> imagezmq<span class="token punctuation">.</span>ImageSender<span class="token punctuation">(</span>connect_to<span class="token operator">=</span><span class="token string">&#39;tcp://10.144.54.202:5555&#39;</span><span class="token punctuation">)</span> 
cam_id <span class="token operator">=</span> socket<span class="token punctuation">.</span>gethostname<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;cam_id: &quot;</span><span class="token punctuation">,</span>cam_id<span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token comment"># 读取视频流的帧</span>
    ret<span class="token punctuation">,</span> frame <span class="token operator">=</span> cap<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    sender<span class="token punctuation">.</span>send_image<span class="token punctuation">(</span>cam_id<span class="token punctuation">,</span> frame<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>frame<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>

    resized_frame <span class="token operator">=</span> cv2<span class="token punctuation">.</span>resize<span class="token punctuation">(</span>frame<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">640</span><span class="token punctuation">,</span> <span class="token number">480</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    cv2<span class="token punctuation">.</span>imshow<span class="token punctuation">(</span><span class="token string">&#39;Resized Frame&#39;</span><span class="token punctuation">,</span> resized_frame<span class="token punctuation">)</span>

    <span class="token comment"># 按下&#39;q&#39;键退出循环</span>
    <span class="token keyword">if</span> cv2<span class="token punctuation">.</span>waitKey<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xFF</span> <span class="token operator">==</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>

<span class="token comment"># 释放VideoCapture对象</span>
cap<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 关闭所有打开的窗口</span>
cv2<span class="token punctuation">.</span>destroyAllWindows<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="视频流接收端" tabindex="-1"><a class="header-anchor" href="#视频流接收端" aria-hidden="true">#</a> 视频流接收端</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> cv2
<span class="token keyword">import</span> imagezmq
image_hub <span class="token operator">=</span> imagezmq<span class="token punctuation">.</span>ImageHub<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>  
    cam_id<span class="token punctuation">,</span> frame <span class="token operator">=</span> image_hub<span class="token punctuation">.</span>recv_image<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># cv2.imshow(cam_id, frame)  </span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>frame<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
    cv2<span class="token punctuation">.</span>waitKey<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    image_hub<span class="token punctuation">.</span>send_reply<span class="token punctuation">(</span><span class="token string">b&#39;OK&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用opencv从-接受rtsp视频流" tabindex="-1"><a class="header-anchor" href="#使用opencv从-接受rtsp视频流" aria-hidden="true">#</a> 使用opencv从 接受rtsp视频流</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> cv2

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># RTSP视频流地址，包含用户名和密码</span>
    rtsp_url <span class="token operator">=</span> <span class="token string">&#39;rtsp://&lt;USERNAME&gt;:&lt;PASSWORD&gt;@&lt;RTSP_SERVER_IP&gt;:&lt;RTSP_SERVER_PORT&gt;/video&#39;</span>

    <span class="token comment"># 创建VideoCapture对象，连接到RTSP视频流</span>
    cap <span class="token operator">=</span> cv2<span class="token punctuation">.</span>VideoCapture<span class="token punctuation">(</span>rtsp_url<span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># 读取视频流的帧</span>
        ret<span class="token punctuation">,</span> frame <span class="token operator">=</span> cap<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 检查帧是否成功读取</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> ret<span class="token punctuation">:</span>
            <span class="token keyword">break</span>

        <span class="token comment"># 在这里对帧进行处理，例如显示、保存等</span>
        cv2<span class="token punctuation">.</span>imshow<span class="token punctuation">(</span><span class="token string">&#39;Frame&#39;</span><span class="token punctuation">,</span> frame<span class="token punctuation">)</span>

        <span class="token comment"># 按下&#39;q&#39;键退出循环</span>
        <span class="token keyword">if</span> cv2<span class="token punctuation">.</span>waitKey<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xFF</span> <span class="token operator">==</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>

    <span class="token comment"># 释放VideoCapture对象</span>
    cap<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 关闭所有打开的窗口</span>
    cv2<span class="token punctuation">.</span>destroyAllWindows<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考：</h2>`,8),r={href:"https://towardsdatascience.com/live-video-streaming-using-multiple-smartphones-with-imagezmq-e260bd081224",target:"_blank",rel:"noopener noreferrer"};function d(m,k){const s=e("ExternalLinkIcon");return t(),p("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[i("https://towardsdatascience.com/live-video-streaming-using-multiple-smartphones-with-imagezmq-e260bd081224"),c(s)])])])])}const h=a(l,[["render",d],["__file","videoStreaming_ImageZMQ.html.vue"]]);export{h as default};
