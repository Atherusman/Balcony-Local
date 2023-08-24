import { FC, forwardRef, ChangeEvent } from 'react';
import { IMainInput } from 'src/interfaces';
import './MainInput.scss';

export const MainInput: FC<IMainInput> = forwardRef<HTMLInputElement, IMainInput>(
    (
        {
            value,
            label,
            icon,
            sufix,
            type = 'text',
            messageError,
            isFocus,
            onChangeValue,
            changeFocus,
            addClass,
            ...props
        },
        ref
    ) => {
        const focusChanged = (focus: boolean) => {
            changeFocus && changeFocus(focus);
        };

        return (
            <>
                <div
                    className={`main-input ${isFocus && !label && 'main-input--focused'} ${
                        messageError && 'main-input-err'
                    } ${addClass || ''}`}
                >
                    {icon && <span className="main-input__icon">{icon}</span>}
                    <div className="main-input__content">
                        {label && (
                            <label
                                className={`main-input__content_label ${
                                    messageError ? 'main-input__content_label_error' : ''
                                }`}
                            >
                                {label}
                            </label>
                        )}
                        <input
                            value={value}
                            ref={ref}
                            type={type}
                            {...props}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                onChangeValue && onChangeValue(e.target.value)
                            }
                            onFocus={() => focusChanged(true)}
                        />
                    </div>
                    {sufix && (
                        <span
                            className="main-input__icon"
                            onClick={() => onChangeValue && onChangeValue('')}
                        >
                            {sufix}
                        </span>
                    )}
                </div>
                {messageError && <div className={'main-input-err_message'}>{messageError}</div>}
            </>
        );
    }
);

MainInput.displayName = 'customInput';
