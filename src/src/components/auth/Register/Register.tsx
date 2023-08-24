import React, { useState, FocusEvent, useEffect, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthWrap } from '../components/auth-wrap';
import { MainButton, Modal } from 'src/components';
import { validateField } from 'src/helpers';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setLoginModal } from 'src/store';
import { loginByEmail } from 'src/store';
import { RegisterByEmail, setLoginError } from 'src/store/user/reducer.actions';
import { AuthInput } from '../components/auth-input';
import { changeCommingSoon, setRegisterModal } from 'src/store/main/reducer.actions';
import { Routes as R } from 'src/constants';

const initState = {
    first_name: '',
    last_name: '',
    business_name: '',
    business_type_id: 0,
    wallet_address: '',
    user_id: '',
    org_code: '',
    profile_picture: '',
    email: '',
    password: '',
    verified_kyc: 0,
};

export const RegisterComponent = () => {
    const errors = useAppSelector(state => state.userReducer.errors);
    const navigate = useNavigate();
    const [values, setValues] = useState(initState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(setLoginError({ email: null, password: null, socials: null }));
        };
    }, []);

    const handleClose = () => {
        dispatch(setRegisterModal(false));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isFirstNameValid = !runValidation('first_name', values.first_name);
        const isLastNameValid = !runValidation('last_name', values.last_name);
        const isBusinessNameValid = !runValidation('business_name', values.business_name);
        const isBusinessTypeIdValid = !runValidation(
            'business_type_id',
            String(values.business_type_id || '')
        );
        const isWalletAddressValid = !runValidation('wallet_address', values.wallet_address);
        const isUserIdValid = !runValidation('user_id', values.user_id);
        const isOrgCodeValid = !runValidation('org_code', values.org_code);
        const isProfileValid = !runValidation('profile_picture', values.profile_picture);
        const isEmailValid = !runValidation('email', values.email);
        const isPasswordValid = !runValidation('password', values.password);
        const isVerifiedKYCValid = !runValidation('verified_kyc', String(values.verified_kyc));

        if (
            isFirstNameValid &&
            isLastNameValid &&
            isBusinessNameValid &&
            isBusinessTypeIdValid &&
            isWalletAddressValid &&
            isUserIdValid &&
            isOrgCodeValid &&
            isProfileValid &&
            isEmailValid &&
            isPasswordValid &&
            isVerifiedKYCValid
        ) {
            dispatch(
                RegisterByEmail(
                    values,
                    () => {
                        // navigate(R.PROFILE);
                        alert('Register successful');
                    },
                    handleClose
                )
            );
        }
    };

    const handleChange = (type: string) => (value: string) => {
        if (!['profile_picture', 'verified_kyc'].includes(type)) {
            if (type === 'business_type_id') {
                setValues(prevState => ({ ...prevState, [type]: Number(value) }));
            } else {
                setValues(prevState => ({ ...prevState, [type]: value }));
            }
        } else {
            setValues(prevState => ({
                ...prevState,
                [type]: value.replace(/\\/g, '/').split('/').pop(),
            }));
        }
    };
    console.log(values);
    const runValidation = (type: string, value: string) => {
        const fieldError = validateField(type, value);
        dispatch(setLoginError({ [type]: fieldError }));
        return fieldError;
    };

    const handleVarified = (isChecked: boolean) => {
        setValues(prevState => ({ ...prevState, verified_kyc: isChecked ? 1 : 0 }));
    };

    const handleProfile = (file: File) => {
        if (!file) return;
        setValues(prevState => ({ ...prevState, profile_picture: file.name }));
    };

    const handleFocus = (type: string) => (e: FocusEvent<HTMLInputElement>) => {
        runValidation(type, e.target.value);
    };

    const handleLogin = () => {
        dispatch(setLoginModal(true));
    };

    const header = (
        <>
            <p>Register</p>
            <div>
                <span>Already have an account?</span>
                <Link
                    to="/1"
                    onClick={e => {
                        e.preventDefault();
                        dispatch(changeCommingSoon({ comming_soon: false }));
                        handleClose();
                        handleLogin();
                    }}
                >
                    Log In
                </Link>
            </div>
        </>
    );

    return (
        <Modal width={620} show={true} onClose={handleClose}>
            <AuthWrap header={header}>
                <form onSubmit={handleSubmit}>
                    <AuthInput
                        addClass={'auth-input'}
                        value={values.first_name}
                        messageError={errors.first_name}
                        placeholder={'First Name'}
                        onChangeValue={handleChange('first_name')}
                        onBlur={handleFocus('first_name')}
                        label={'First Name'}
                    />

                    <AuthInput
                        addClass={'auth-input'}
                        value={values.last_name}
                        messageError={errors.last_name}
                        placeholder={'Last Name'}
                        onChangeValue={handleChange('last_name')}
                        onBlur={handleFocus('last_name')}
                        label={'Last Name'}
                    />

                    <AuthInput
                        addClass={'auth-input'}
                        value={values.business_name}
                        messageError={errors.business_name}
                        placeholder={'Business Name'}
                        onChangeValue={handleChange('business_name')}
                        onBlur={handleFocus('business_name')}
                        label={'Business Name'}
                    />

                    <AuthInput
                        addClass={'auth-input'}
                        value={String(values.business_type_id || '')}
                        messageError={errors.business_type_id}
                        placeholder={'Business Type ID'}
                        onChangeValue={handleChange('business_type_id')}
                        onBlur={handleFocus('business_type_id')}
                        label={'Business Type ID'}
                    />

                    <AuthInput
                        addClass={'auth-input'}
                        value={values.wallet_address}
                        messageError={errors.wallet_address}
                        placeholder={'Wallet Address'}
                        onChangeValue={handleChange('wallet_address')}
                        onBlur={handleFocus('wallet_address')}
                        label={'Wallet Address'}
                    />

                    <AuthInput
                        addClass={'auth-input'}
                        value={values.user_id}
                        messageError={errors.user_id}
                        placeholder={'User ID'}
                        onChangeValue={handleChange('user_id')}
                        onBlur={handleFocus('user_id')}
                        label={'User ID'}
                    />

                    <AuthInput
                        addClass={'auth-input'}
                        value={values.org_code}
                        messageError={errors.org_code}
                        placeholder={'Organization Code'}
                        onChangeValue={handleChange('org_code')}
                        onBlur={handleFocus('org_code')}
                        label={'Organization Code'}
                    />
                    <input
                        type="file"
                        name="profile_picture"
                        id="profile_picture"
                        onChange={(e: any) => handleProfile(e.target.files[0])}
                    />
                    {errors.profile_picture && !values.profile_picture && (
                        <p>{errors.profile_picture}</p>
                    )}
                    {/* <AuthInput
                        type="file"
                        addClass={'auth-input'}
                        value={values.profile_picture}
                        messageError={errors.profile_picture}
                        placeholder={'Last Name'}
                        onChangeValue={handleChange('profile_picture')}
                        onBlur={handleFocus('profile_picture')}
                        label={'Profile picture'}
                    /> */}

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
                    <input
                        type="checkbox"
                        checked={values.verified_kyc ? true : false}
                        onChange={e => handleVarified(e.target.checked)}
                    />
                    <div className="auth-btns-row">
                        <MainButton buttonType={'primary'} buttonSize={'l'} type={'submit'}>
                            Register
                        </MainButton>
                    </div>
                </form>
            </AuthWrap>
        </Modal>
    );
};

export const Register = () => {
    const modal = useAppSelector(state => state.mainReducer.register);

    return modal && <RegisterComponent />;
};
