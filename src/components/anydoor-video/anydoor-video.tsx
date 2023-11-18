import * as React from 'react';
import { createElement } from 'react';
import './index.scss';
import { v4 as UuidV4 } from "uuid";

import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import FlvPlugin from 'xgplayer-flv';
import HlsPlugin from 'xgplayer-hls';
import Mp4Plugin from 'xgplayer-mp4';

export interface AnydoorVideoProps {
    // 是否显示控制栏
    control?: boolean,
    // 自动播放
    autoplay?: boolean,
    // 播放链接
    url?: string,
    // 循环
    loop?: boolean,
    // 封面地址
    poster?: string,
    // 迷你进度条
    miniprogress?: boolean,
    rotate?: boolean,
    screenShot?: boolean,
    pip?: boolean,
    mini?: boolean,
    cssFullscreen?: boolean,
    playbackRate?: boolean,
    x5VideoPlayerType: string,
    x5VideoPlayerFullscreen: boolean,
    x5VideoOrientation: 'landscape' | 'portraint',
    // MP4缓存
    mp4Cache?: boolean,
    flv?: boolean,
    hls?: boolean,
    progressColor?: string,
    playedColor?: string,
    cachedColor?: string,
    volumeColor?: string,
    isLive?: boolean
}

const AnydoorVideo: React.FC<AnydoorVideoProps> = ({ ...otherprops }) => {
    const uuid = UuidV4().toLowerCase().toString()
    let player: any | null = null
    const style = document.createElement("style")
    window.document.body.appendChild(style);

    React.useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        player = loadPlayer(player, uuid, otherprops)
        style.innerHTML = `
        .xg-options-list li.selected{
            color:${otherprops.volumeColor} !important;
        }
        `
    }, [otherprops])

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <div id={uuid} {...otherprops} />
    )
}

AnydoorVideo.displayName = 'AnydoorVideo'
export default AnydoorVideo


// 加载播放器
function loadPlayer(player: any, id, config: AnydoorVideoProps): Player {
    player && player.destroy()
    // eslint-disable-next-line no-param-reassign
    player = null
    const plugins: any = []

    if (config.flv) {
        plugins.push(FlvPlugin)
    }
    if (config.hls) {
        plugins.push(HlsPlugin)
    }
    if (config.mp4Cache) {
        plugins.push(Mp4Plugin)
    }

    return new Player({
        id: `${id}`,
        ...config as any,
        "x5-video-player-type": config.x5VideoPlayerType,
        "x5-video-player-fullscreen": config.x5VideoPlayerFullscreen,
        'x5-video-orientation': config.x5VideoOrientation,
        plugins,
        commonStyle: {
            progressColor: config.progressColor,
            playedColor: config.playedColor,
            cachedColor: config.cachedColor,
            volumeColor: config.volumeColor
        },
        hls: {}
    })
}


