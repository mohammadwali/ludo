import UIfx from 'uifx';

export const UiSounds = {
    move: new UIfx('/audio/move.mp3', {
        volume: 0.2,
        throttleMs: 0,
    })
};

console.log(UiSounds);