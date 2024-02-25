import {memo} from 'react';
import type {FC} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import {WelcomePage} from './components/WelcomePage/WelcomePage';
import {NewProcess} from "./components/NewProcess/NewProcess";

interface Props {
    className?: string;
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <WelcomePage/>
    },
    {
        path: '/create',
        element: <NewProcess/>
    }
]);


export const App: FC<Props> = memo(function App(props = {}) {
    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <RouterProvider router={router}/>
        </div>
    );
});
