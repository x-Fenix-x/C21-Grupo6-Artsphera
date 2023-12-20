const db = require('../../database/models');

const getCart = (req, res) => {
    try {
        if (!req.session.cart) {
            let error = new Error('Error al cargar el carrito');
            error.status = 404;
            throw error;
        }

        return res.status(200).json({
            ok: true,
            data: req.session.cart,
        });
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'Error en el servidor',
        });
    }
};

const addItemToCart = async (req, res) => {
    try {
        if (!req.session.cart) {
            let error = new Error('Error al cargar el carrito');
            error.status = 404;
            throw error;
        }

        const { quantity, order, product: id } = req.query;

        const { title, price, discount, images } = await db.Product.findByPk(
            id,
            {
                include: ['images'],
            }
        );

        let newProduct = {
            id,
            title,
            price,
            discount,
            image: images[0].image,
            quantity: +quantity || 1,
        };

        let resultSearch;

        req.session.cart.products.map((product) => {
            if (product.id === id) {
                ++product.quantity;
                resultSearch = true;
            }
        });

        if (!resultSearch) {
            req.session.cart.products.push(newProduct);

        }

        req.session.cart.total = req.session.cart.products
            .map((product) => product.price * product.quantity)
            .reduce((a, b) => a + b, 0);

        return res.status(200).json({
            ok: true,
            data: req.session.cart,
        });
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'Error en el servidor',
        });
    }
};

module.exports = {
    getCart,
    addItemToCart,
};
