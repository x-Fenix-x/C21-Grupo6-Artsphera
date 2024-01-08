import { UseFetch } from '../../dashboard/src/hooks/UseFetch';

export const getAllCategory = async () => {
    try {
        return UseFetch('categories');
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio',
        };
    }
};