import {memo} from 'react';
import type {FC} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {WelcomePage} from './components/WelcomePage/WelcomePage';
import {NewProcess} from "./components/NewProcess/NewProcess";
import {ContinueProcess} from "./components/ContinueProcess/ContinueProcess";
import {MyProcessList} from "./components/BACKUP/MyProcessList"
interface Props {
    className?: string;
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <WelcomePage/>,
    },
    {
        path: '/create',
        element: <NewProcess/>
    },
    {
        path: '/continue',
        element: <ContinueProcess/>
    },
    {
        path: '/myProcess',
        element: <MyProcessList/>
    },
]);


const App: FC<Props> = memo(function App(props = {}) {


    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
});

export default App;