import React from 'react';
import type { ArrowButtonDefaultProps } from '../../../entities/user/types';

export const ArrowButtonDefault: React.FC<ArrowButtonDefaultProps> = ({ color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right-icon lucide-move-right">
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
        </svg>
    );
};