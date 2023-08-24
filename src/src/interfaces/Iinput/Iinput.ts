import { ForwardedRef, InputHTMLAttributes, ReactNode } from 'react';

export type IInput = InputHTMLAttributes<HTMLInputElement>;

export interface IMainInput extends IInput {
    isFocus?: boolean;
    value: string;
    label?: string;
    messageError?: string;
    icon?: ReactNode;
    sufix?: ReactNode;
    ref?: ForwardedRef<HTMLInputElement>;
    onChangeValue?: (val: string) => void;
    changeFocus?: (focus: boolean) => void;
    addClass?: string;
}
