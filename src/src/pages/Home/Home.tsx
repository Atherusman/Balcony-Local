import './Home.scss';
import illustration1 from 'src/assets/images/illustration1.jpg';
import illustration2 from 'src/assets/images/illustration2.jpg';
import logoDefault from 'src/assets/images/balcony.svg';
import title from 'src/assets/images/maintext.svg';

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MainButton, SearchMainSelect } from 'src/components';

import { useAppDispatch, useAppSelector } from 'src/hooks';

import { getMunicipalitiesAsync } from 'src/store';
import { tMunicipality } from 'src/types';

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { municipalities } = useAppSelector(state => state.municipalitiesReducer);
    const [city, setCity] = useState<tMunicipality>({
        COUNTY: '',
        MUNICIPALITY_NAME: '',
        MUNICIPALITY_CODE: '',
    });
    const [bgImage, setBgImage] = useState<string>(illustration1);
    const changeBGImage = () => {
        setBgImage(bgImage === illustration1 ? illustration2 : illustration1);
    };

    const getHouses = async () => {
        navigate(`/municipality/${city.MUNICIPALITY_CODE}`);
    };
    useEffect(() => {
        dispatch(getMunicipalitiesAsync());
    }, []);
    console.log('city', city);
    return (
        <div className="home" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="home__content">
                <div className="home__content_image">
                    <img src={logoDefault} alt="logo" onClick={() => changeBGImage()} />
                </div>

                <img src={title} alt="title" className="home__content_title" />
                <div className="home__content_form">
                    <p className="home__content_form-label">Municipality</p>
                    <SearchMainSelect
                        value={city.MUNICIPALITY_NAME}
                        items={municipalities}
                        onSelect={(val: tMunicipality) => {
                            setCity(val);
                        }}
                    />
                </div>
                <div className="home__content_button">
                    <MainButton
                        buttonType="primary"
                        buttonSize="l"
                        disabled={!city.MUNICIPALITY_NAME}
                        onClick={() => {
                            getHouses();
                        }}
                    >
                        Search
                    </MainButton>
                </div>
            </div>
        </div>
    );
};
