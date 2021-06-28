// An highlighted block
var player = videojs('example_video_1', {
    sourcesOrder: true,
    controls: true, // 是否显示控制条      
    // poster: 'xxx', // 视频封面图地址       
    preload: 'auto',
    autoplay: false,
    // fluid: true, // 自适应宽高       
    language: 'zh-CN', // 设置语言       
    muted: false, // 是否静音       
    inactivityTimeout: false,
    controlBar: { // 设置控制条组件        
        /* 设置控制条里面组件的相关属性及显示与否*/        
        /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
        children: [
            { name: 'playToggle' }, // 播放按钮         
            { name: 'PlayNext' },
            { name: 'currentTimeDisplay' }, // 当前已播放时间        
            { name: 'progressControl' }, // 播放进度条           
            { name: 'durationDisplay' }, // 总时间          
            { name: 'audioTrackButton' },
            { name: 'playbackRateMenuButton', 'playbackRates': [0.5, 1, 1.5, 2, 2.5] },
            { name: 'volumePanel', // 音量控制  inline: false, // 不使用水平方式  
        },                           
                { name: 'AutoPlayNext' },          
                { name: 'FullscreenToggle' } // 全屏        
                ]      
               },
sources: [ // 视频源     
    {
        src: 'C:/Users/rhein/Videos/Captures/111.mp4',
        type: 'video/mp4',
        poster: '//vjs.zencdn.net/v/oceans.png'
    },
    {
        src: 'C:/Users/rhein/Videos/Captures/222.mp4',
        type: 'video/mp4',
        poster: '//vjs.zencdn.net/v/oceans.png'
    }
]   },
function () { console.log('视频可以播放了', this); });