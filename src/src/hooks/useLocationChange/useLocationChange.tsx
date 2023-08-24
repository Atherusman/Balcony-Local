import { Location, useLocation } from 'react-router-dom';
import { usePrevious } from '../usePrevious';
import { useEffect } from 'react';

export const useLocationChange = (
    action: (location: Location, prevLocation: Location | undefined) => void
) => {
    const location = useLocation();
    const prevLocation = usePrevious(location);
    useEffect(() => {
        action(location, prevLocation);
    }, [location]);
};
