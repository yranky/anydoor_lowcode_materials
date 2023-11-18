

import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AnydoorVideoMeta: IPublicTypeComponentMetadata = {
  "componentName": "AnydoorVideo",
  "title": "AnydoorVideo",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "anydoor_lowcode_materials",
    "version": "0.1.0",
    "exportName": "AnydoorVideo",
    "main": "src\\index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        name: 'controls',
        title: {
          label: '控制栏',
          tip: '',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'autoplay',
        title: {
          label: '自动播放',
          tip: '',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'loop',
        title: {
          label: '循环播放',
          tip: '',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'miniprogress',
        title: {
          label: '迷你进度条',
          tip: '',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'screenShot',
        title: {
          label: '截图插件',
          tip: '',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'rotate',
        title: {
          label: '旋转插件',
          tip: '',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'pip',
        title: {
          label: '画中画插件',
          tip: '是否使用画中画插件，该配置项为控制栏上画中画按钮的启动配置',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'mini',
        title: {
          label: 'mini小窗插件',
          tip: '该配置仅仅为控制栏上小窗的按钮的启动配置',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'cssFullscreen',
        title: {
          label: '网页样式全屏按钮开挂',
          tip: '网页样式全屏按钮开挂',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'playbackRate',
        title: {
          label: '倍速插件显示列表',
          tip: '倍速插件显示列表',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'url',
        title: {
          label: '视频链接',
          tip: '',
        },
        setter: 'StringSetter',
        defaultValue: "http://nas.douye.top:10000/data/files/202311/04/kHTye9z20YM4w.mp4"
      },
      {
        name: 'x5VideoPlayerType',
        title: {
          label: '微信同层播放',
          tip: '',
        },
        setter: 'StringSetter',
        defaultValue: "h5",
      },
      {
        name: 'x5VideoPlayerFullscreen',
        title: {
          label: '允许微信全屏播放',
          tip: '',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      }, {
        name: 'mp4Cache',
        title: {
          label: 'mp4视频缓存播放',
          tip: '在支持mse的环境下对mp4视频进行range请求并控制缓存播放',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      }, {
        name: 'hls',
        title: {
          label: 'hls支持',
          tip: '',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      }, {
        name: 'flv',
        title: {
          label: 'flv支持',
          tip: '',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      }, {
        name: 'isLive',
        title: {
          label: '是否直播',
          tip: '',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'x5VideoOrientation',
        title: {
          label: '微信横竖屏控制',
          tip: '',
        },
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "options": [
              {
                "label": "竖屏",
                "value": "portraint"
              },
              {
                "label": "横屏",
                "value": "landscape"
              }
            ]
          },
          "initialValue": "portraint"
        }
      },
      {
        name: 'poster',
        title: {
          label: '封面地址',
          tip: '',
        },
        setter: 'StringSetter',
        defaultValue: "",
      },
      {
        name: 'progressColor',
        title: {
          label: '进度条颜色',
          tip: '',
        },
        setter: 'ColorSetter',
        defaultValue: "#4E6EF2",
      },
      {
        name: 'playedColor',
        title: {
          label: '已播放的进度条颜色',
          tip: '',
        },
        setter: 'ColorSetter',
        defaultValue: "#4f52ff",
      },
      {
        name: 'cachedColor',
        title: {
          label: '已缓存的颜色',
          tip: '',
        },
        setter: 'ColorSetter',
        defaultValue: "rgba(255,255,255,.5)",
      },
      {
        name: 'volumeColor',
        title: {
          label: '声音条的颜色',
          tip: '',
        },
        setter: 'ColorSetter',
        defaultValue: "#4E6EF2",
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "AnydoorVideo",
    "screenshot": "",
    "schema": {
      "componentName": "AnydoorVideo",
      "props": {}
    }
  }
];

export default {
  ...AnydoorVideoMeta,
  snippets
};
