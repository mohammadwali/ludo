import UIfx from 'uifx';

import moveAudio from './assets/audio/move.mp3';

export const UiSounds = {
    move: new UIfx(moveAudio, {
        volume: 0.2,
        throttleMs: 0,
    })
};

console.log(UiSounds);