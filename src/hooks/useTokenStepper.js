import { get } from 'lodash/object';
import { useCallback, useContext, useRef } from 'react';
import { BoardMap, BoardPath } from '../config/game/board';

import { GameContext } from '../context/GameContext';
import { UiSounds } from '../UiSounds';
import { getNextStepPath, getTokenIndexInPath, isSafeSpot, isTokenInPath } from '../utils/boardHelper';


export const useTokenStepper = (tokenColorPos) => {
    let tokenMoveIntervalId = useRef(null);
    const { state: { tokensPos }, moveToken, passToNextPlayer } = useContext(GameContext);

    const stepper = useCallback((step, tokenIndex) => {
        if (tokenMoveIntervalId.current) {
            return;
        }

        const currentTokenPosition = get(tokensPos, [tokenColorPos, tokenIndex], null);
        const homeBlock = get(BoardMap, [tokenColorPos, 'homeBlocks', 0]);

        if (!isTokenInPath(tokenColorPos, currentTokenPosition) && step === 6) {
            UiSounds.tokenEnter.play();
            moveToken({ colorPos: tokenColorPos, index: tokenIndex, pos: homeBlock });
            return;
        }

        const tokenIndexInPath = getTokenIndexInPath(tokenColorPos, currentTokenPosition);


        const nextSteps = getNextStepPath(tokenColorPos, tokenIndexInPath, step);
        const update = () => {

            if (nextSteps.length) {
                moveToken({ colorPos: tokenColorPos, index: tokenIndex, pos: nextSteps[0] });
                UiSounds.move.play();

                nextSteps.splice(0, 1);
                return;
            }

            clearInterval(tokenMoveIntervalId.current);
            tokenMoveIntervalId.current = null;

            const currentPathPointIndex = tokenIndexInPath + step;
            if (isSafeSpot(BoardPath[tokenColorPos][currentPathPointIndex])) {
                UiSounds.safeBlockEnter.play();
            }

            setTimeout(() => {
                passToNextPlayer();
                UiSounds.playerSwitched.play();
            }, 500);
        };

        update();
        tokenMoveIntervalId.current = setInterval(update, 250);

    }, [moveToken, passToNextPlayer, tokenColorPos, tokensPos]);

    return { stepper }
};