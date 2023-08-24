// Use throughout your app instead of plain `useDispatch` and `useSelector`
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
