import UIfx from 'uifx';

// map sounds to emojis from here -
//http://soundbible.com/suggest.php?q=cheer&x=0&y=0

export const UiSounds = {
    move: new UIfx('/audio/move.mp3', {
        volume: 0.2,
        throttleMs: 0,
    }),
    dice: new UIfx('/audio/dice.mp3', {
        volume: 0.2,
        throttleMs: 0,
    }),
    playerSwitched: new UIfx('/audio/player-switch.mp3', {
        volume: 0.2,
        throttleMs: 0,
    }),
    tokenEnter: new UIfx('/audio/token-enter.mp3', {
        volume: 0.2,
        throttleMs: 0,
    }),
    safeBlockEnter: new UIfx('/audio/safe-block.wav', {
        volume: 0.2,
        throttleMs: 0,
    }),
};

console.log(UiSounds);