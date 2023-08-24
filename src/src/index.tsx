import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider } from 'react-redux';

import './assets/styles/styles.scss';
import './assets/fonts/AcademyEngravedStd/AcademyEngravedStd.ttf';

export const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
);

reportWebVitals();
