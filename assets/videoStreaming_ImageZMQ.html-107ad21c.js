const n=JSON.parse(`{"key":"v-095d97a8","path":"/blog/code/videoStreaming_ImageZMQ.html","title":"视频流传输","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"视频流传输","order":3,"category":["使用指南"],"tag":["ImageZMQ","video_streaming","python"]},"headers":[{"level":2,"title":"使用 imagezmq 传输视频流","slug":"使用-imagezmq-传输视频流","link":"#使用-imagezmq-传输视频流","children":[{"level":3,"title":"视频流发送端","slug":"视频流发送端","link":"#视频流发送端","children":[]},{"level":3,"title":"视频流接收端","slug":"视频流接收端","link":"#视频流接收端","children":[]},{"level":3,"title":"使用opencv从 接受rtsp视频流","slug":"使用opencv从-接受rtsp视频流","link":"#使用opencv从-接受rtsp视频流","children":[]}]},{"level":2,"title":"参考：","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1688268104000,"updatedTime":1688268104000,"contributors":[{"name":"lksshub","email":"980294373@qq.com","commits":1}]},"readingTime":{"minutes":1.03,"words":309},"filePathRelative":"blog/code/videoStreaming_ImageZMQ.md","localizedDate":"2023年7月2日","excerpt":"<h2> 使用 imagezmq 传输视频流</h2>\\n<h3> 视频流发送端</h3>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> imutils<span class=\\"token punctuation\\">.</span>video <span class=\\"token keyword\\">import</span> VideoStream\\n<span class=\\"token keyword\\">import</span> imagezmq\\n<span class=\\"token keyword\\">import</span> socket\\n<span class=\\"token keyword\\">import</span> cv2\\n\\n<span class=\\"token comment\\"># 创建VideoCapture对象，参数0表示使用默认的摄像头</span>\\ncap <span class=\\"token operator\\">=</span> cv2<span class=\\"token punctuation\\">.</span>VideoCapture<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">#ubuntu 的ip</span>\\nsender <span class=\\"token operator\\">=</span> imagezmq<span class=\\"token punctuation\\">.</span>ImageSender<span class=\\"token punctuation\\">(</span>connect_to<span class=\\"token operator\\">=</span><span class=\\"token string\\">'tcp://10.144.54.202:5555'</span><span class=\\"token punctuation\\">)</span> \\ncam_id <span class=\\"token operator\\">=</span> socket<span class=\\"token punctuation\\">.</span>gethostname<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"cam_id: \\"</span><span class=\\"token punctuation\\">,</span>cam_id<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">while</span> <span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token comment\\"># 读取视频流的帧</span>\\n    ret<span class=\\"token punctuation\\">,</span> frame <span class=\\"token operator\\">=</span> cap<span class=\\"token punctuation\\">.</span>read<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    sender<span class=\\"token punctuation\\">.</span>send_image<span class=\\"token punctuation\\">(</span>cam_id<span class=\\"token punctuation\\">,</span> frame<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>frame<span class=\\"token punctuation\\">.</span>shape<span class=\\"token punctuation\\">)</span>\\n\\n    resized_frame <span class=\\"token operator\\">=</span> cv2<span class=\\"token punctuation\\">.</span>resize<span class=\\"token punctuation\\">(</span>frame<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">640</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">480</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n    cv2<span class=\\"token punctuation\\">.</span>imshow<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Resized Frame'</span><span class=\\"token punctuation\\">,</span> resized_frame<span class=\\"token punctuation\\">)</span>\\n\\n    <span class=\\"token comment\\"># 按下'q'键退出循环</span>\\n    <span class=\\"token keyword\\">if</span> cv2<span class=\\"token punctuation\\">.</span>waitKey<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&amp;</span> <span class=\\"token number\\">0xFF</span> <span class=\\"token operator\\">==</span> <span class=\\"token builtin\\">ord</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'q'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">break</span>\\n\\n<span class=\\"token comment\\"># 释放VideoCapture对象</span>\\ncap<span class=\\"token punctuation\\">.</span>release<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># 关闭所有打开的窗口</span>\\ncv2<span class=\\"token punctuation\\">.</span>destroyAllWindows<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};