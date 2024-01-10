import { UseFetch } from '../../dashboard/src/hooks/UseFetch';

export const totalProductInDb = async () => {
    try {
        return await UseFetch('products/count');
    } catch (error) {
        console.log(error);
    }
};

export const getAllProducts = async () => {
    try {
        return await UseFetch('products/count');
    } catch (error) {
        console.log(error);
    }
};
