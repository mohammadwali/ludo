import React, { useCallback, useContext, useRef } from 'react';
import { get } from 'lodash/object';
import { BoardConfig } from '../../../constant';
import { GameContext } from '../../../context/GameContext';
import { TokenItem, TokenItemPlaceHolder } from '../../../components/styled';
import { UiSounds } from '../../../UiSounds';

const { map: boardMap, path } = BoardConfig;

export const Token = (props) => {
    const { pos, index, withPlaceholder, blockPos, ...rest } = props;
    const {
        setDie,
        moveToken,
        setActiveBlock,
        state: { tokensPos, colorsPos, activeBlock, die }
    } = useContext(GameContext);

    let tokenMoveIntervalId = useRef(null);
    const currentTokenColor = get(colorsPos, [pos]);
    const currentTokenPosition = get(tokensPos, [pos, index], null);

    const handleClick = useCallback(() => {
        if (tokenMoveIntervalId.current) {
            return;
        }

        if (pos === activeBlock) {
            const homeBlock = get(boardMap, [pos, 'homeBlock']);
            if (!path.includes(currentTokenPosition)) {
                if (die === 6) {
                    setDie({ die: -1 });
                    moveToken({ colorPos: pos, index, pos: homeBlock });
                    return;
                }
            } else {
                let currentPathPointIndex = path.indexOf(blockPos) + 1;
                const destPathPointIndex = currentPathPointIndex + die;

                const update = () => {
                    if (currentPathPointIndex !== destPathPointIndex) {
                        const newPos = path[currentPathPointIndex];

                        console.log(newPos);

                        moveToken({ colorPos: pos, index, pos: newPos });
                        currentPathPointIndex++;
                        UiSounds.move.play(0.1);
                        console.log('called');

                    } else {
                        clearInterval(tokenMoveIntervalId.current);
                        tokenMoveIntervalId.current = null;
                    }

                };

                update();
                tokenMoveIntervalId.current = setInterval(update, 250);


                // setDie({ die: -1 });
                // setActiveBlock({ block: null });
            }
        }
    }, [activeBlock, blockPos, currentTokenPosition, die, index, pos, setDie, moveToken]);

    if (currentTokenPosition === blockPos) {
        return (
            <TokenItem
                {...rest}
                onClick={handleClick}
                color={currentTokenColor}/>
        );
    }
    return withPlaceholder ? (
        <TokenItemPlaceHolder/>
    ) : null;
};

Token.defaultProps = {
    withPlaceholder: false,
};