import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl bg-white dark:bg-dark-card shadow-sm transition-all duration-300",
                className
            )}
            {...props}
        />
    );
}
