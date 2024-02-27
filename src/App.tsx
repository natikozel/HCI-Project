import {memo} from 'react';
import type {FC} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {NewProcess} from "./components/NewProcess/NewProcess";
import {ContinueProcess} from "./components/ContinueProcess/ContinueProcess";
import {MyProcessList} from "./components/MyProcessList/MyProcessList";
import {MyTaxes} from "./components/MyTaxes/MyTaxes";
import {WelcomePage} from "./components/WelcomePage/WelcomePage";
import {ProfilePage} from "./components/ProfilePage/ProfilePage";

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
        path: '/myProcess/:myId',
        element: <ProfilePage/>
    },
    {
        path: '/myProcess/:myId/myList',
        element: <MyProcessList/>
    },
    {
        path: '/myProcess/:myId/MyList/mytaxes',
        element: <MyTaxes/>
    },
]);


const App: FC<Props> = memo(function App(props = {}) {


    return (
        <RouterProvider router={router}/>
    );
});

export default App;