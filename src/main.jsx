import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './app/store'
import {Provider} from 'react-redux'
import {NextUIProvider} from "@nextui-org/react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NextUIProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </NextUIProvider>
    </StrictMode>
    ,
)
