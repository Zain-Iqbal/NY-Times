import React, {lazy, Suspense} from 'react';
import {Routes, Route} from "react-router-dom";

import {ROUTES} from "./routes";
import DefaultLayout from './shared-components/default-layout';

const Home = lazy(() => import("./screens/home"));

function App() {
    return (<DefaultLayout>
            <Suspense>
                <Routes>
                    <Route path={ROUTES.default} element={<Home/>}/>
                </Routes>
            </Suspense>
        </DefaultLayout>
    );
}

export default App;
