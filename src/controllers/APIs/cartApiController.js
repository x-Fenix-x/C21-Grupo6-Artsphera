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

const calculateTotal = (req) => {
    req.session.cart.total = req.session.cart.products
        .map(
            ({ price, discount, quantity }) =>
                (price - (price * discount) / 100) * quantity
        )
        .reduce((a, b) => a + b, 0);
};

const addItemToCart = async (req, res) => {
    try {
        if (!req.session.cart) {
            let error = new Error('Error al cargar el carrito');
            error.status = 404;
            throw error;
        }

        const { quantity, product: id } = req.body;

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

        if (
            req.session.cart.products.map((product) => product.id).includes(id)
        ) {
            req.session.cart.products = req.session.cart.products.map(
                (product) => {
                    if (product.id === id) {
                        ++product.quantity;
                    }
                    return product;
                }
            );
        } else {
            req.session.cart.products.push(newProduct);

            await db.Item.create({
                orderId: req.session.cart.orderId,
                productId: id,
                quantity: 1,
            });
        }

        calculateTotal(req);

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

const clearCart = async (req, res) => {
    try {
        if (!req.session.cart) {
            let error = new Error('Error al cargar el carrito');
            error.status = 404;
            throw error;
        }

        req.session.cart = {
            products: [],
            total: 0,
        };

        return res.status(200).json({
            ok: true,
            data: req.session.cart,
            msg: 'Carrito vaciado exitosamente',
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
    clearCart,
};
