import { createBrowserRouter } from 'react-router-dom';
import App from './src/App';
import { HomeAdminPage } from './src/pages/HomeAdminPage';
import { ListProductsPage } from './src/pages/ListProductsPage';
import { loader as loaderAdminHome } from './src/pages/HomeAdminPage/loader';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomeAdminPage />,
                loader: loaderAdminHome,
            },
            {
                path: '/products',
                element: <ListProductsPage />,
            },
        ],
    },
]);
