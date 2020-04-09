import React from 'react';
import IconMicrophoneOn from '@iconify/icons-bx/bxs-microphone';
import IconMicrophoneOff from '@iconify/icons-bx/bxs-microphone-off';
import { InlineIcon } from '@iconify/react';

export const MicrophoneIcon = ({ isEnabled, ...rest }) => {
    const icon = isEnabled ? IconMicrophoneOn : IconMicrophoneOff;
    return <InlineIcon {...rest} icon={icon}/>
};