import {memo} from 'react';
import type {FC} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {WelcomePage} from './components/WelcomePage/WelcomePage';
import {NewProcess} from "./components/NewProcess/NewProcess";
import {Input} from "./components/ui/input";
import {Button} from "./components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form';
import {z} from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./components/ui/form";

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
]);


const App: FC<Props> = memo(function App(props = {}) {


    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
});

export default App;