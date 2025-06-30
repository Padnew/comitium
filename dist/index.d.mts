import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "outline" | "danger";
    bgColor?: string;
};
declare const Button: React.FC<ButtonProps>;

export { Button };
