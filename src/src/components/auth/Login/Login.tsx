import React, { useState, FocusEvent, useEffect, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthWrap } from '../components/auth-wrap';
import { MainButton, Modal } from 'src/components';
import { validateField } from 'src/helpers';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setLoginModal } from 'src/store';
import { loginByEmail } from 'src/store';
import { setLoginError } from 'src/store/user/reducer.actions';
import { AuthInput } from '../components/auth-input';
import { changeCommingSoon, setRegisterModal } from 'src/store/main/reducer.actions';
import { Routes as R } from 'src/constants';

const initState = {
    email: '',
    password: '',
};

export const LoginComponent = () => {
    const errors = useAppSelector(state => state.userReducer.errors);
    const navigate = useNavigate();
    const [values, setValues] = useState(initState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(setLoginError({ email: null, password: null, socials: null }));
        };
    }, []);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isEmailValid = !runValidation('email', values.email);
        const isPasswordValid = !runValidation('password', values.password);

        if (isEmailValid && isPasswordValid) {
            dispatch(
                loginByEmail(values, () => {
                    // navigate(R.PROFILE);
                    alert('Login Successfull');
                })
            );
        }
    };

    const handleChange = (type: string) => (value: string) => {
        setValues(prevState => ({ ...prevState, [type]: value }));
    };

    const runValidation = (type: string, value: string) => {
        const fieldError = validateField(type, value);
        dispatch(setLoginError({ [type]: fieldError }));
        return fieldError;
    };

    const handleFocus = (type: string) => (e: FocusEvent<HTMLInputElement>) => {
        runValidation(type, e.target.value);
    };

    const handleClose = () => {
        dispatch(setLoginModal(false));
    };

    const handleRegister = () => {
        dispatch(setRegisterModal(true));
    };
    const header = (
        <>
            <p>Log in</p>
            <div>
                <span>Don`t have an account?</span>
                <Link
                    to="/1"
                    onClick={e => {
                        e.preventDefault();
                        dispatch(changeCommingSoon({ comming_soon: false }));
                        handleRegister();
                        handleClose();
                    }}
                >
                    Create Account
                </Link>
            </div>
        </>
    );
    const register = useAppSelector(state => state.mainReducer.register);

    return (
        <Modal width={620} show={true} onClose={handleClose}>
            <AuthWrap header={header}>
                <form onSubmit={handleSubmit}>
                    <AuthInput
                        addClass={'auth-input'}
                        value={values.email}
                        messageError={errors.email}
                        placeholder={'Email'}
                        onChangeValue={handleChange('email')}
                        onBlur={handleFocus('email')}
                        label={'Email'}
                    />
                    <AuthInput
                        value={values.password}
                        messageError={errors.password}
                        placeholder={'Password'}
                        onChangeValue={handleChange('password')}
                        type={`password`}
                        onBlur={handleFocus('password')}
                        label={'Password'}
                    />
                    <div className="auth-btns-row">
                        <MainButton buttonType={'primary'} buttonSize={'l'} type={'submit'}>
                            Log in
                        </MainButton>
                    </div>
                </form>
            </AuthWrap>
        </Modal>
    );
};

export const Login = () => {
    const modal = useAppSelector(state => state.mainReducer.login);

    return modal && <LoginComponent />;
};
