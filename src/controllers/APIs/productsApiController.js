const paginate = require('express-paginate');
const { getAllProducts } = require('../../services/products.services');
const db = require('../../database/models');

module.exports = {
    getAllProducts: async (req, res) => {
        try {
            const { total, products } = await getAllProducts(
                req.query.limit,
                req.skip
            );

            const pagesCount = Math.ceil(total / req.query.limit);
            const currentPage = req.query.page;
            const pages = paginate.getArrayPages(req)(
                pagesCount,
                pagesCount,
                currentPage
            );

            const productsImages = await Promise.all(
                products.map(async (product) => {
                    const images = await product.getImages({ limit: 1 });

                    const imageUrl =
                        images.length > 0
                            ? `${req.protocol}://${req.get(
                                  'host'
                              )}/images/products/${images[0].image}`
                            : undefined;

                    return {
                        ...product.dataValues,
                        image: imageUrl,
                        url: `${req.protocol}://${req.get(
                            'host'
                        )}/api/products/${product.id}`,
                    };
                })
            );

            return res.status(200).json({
                ok: true,
                data: productsImages,
                meta: {
                    total,
                    pagesCount,
                    currentPage,
                    pages,
                },
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                error: error.message || 'Error en el servidor',
            });
        }
    },
    showProduct: async (req, res) => {
        try {
            const product = await getProductById(req.params.id);

            const images = await product.getImages({ limit: 1 });

            const imageUrl =
                images.length > 0
                    ? `${req.protocol}://${req.get('host')}/images/products/${
                          images[0].image
                      }`
                    : undefined;

            return res.status(200).json({
                ok: true,
                data: {
                    ...product.dataValues,
                    image: imageUrl,
                },
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                error: error.message || 'Error en el servidor',
            });
        }
    },

    totalProductInDb: async (req, res) => {
        try {
            const total = await db.Product.count();

            return res.status(200).json({
                ok: true,
                data: total,
            });
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                error: error.message || 'Error en el servidor',
            });
        }
    },
    createProduct: async (req, res) => {
        try {
            const {
                title,
                price,
                discount,
                categoryId,
                sectionId,
                description,
            } = req.body;

            const newProduct = await db.Product.create({
                title: title?.trim(),
                price,
                discount: discount || 0,
                categoryId,
                sectionId,
                description: description?.trim(),
            });

            return res.status(200).json({
                ok: true,
                data: newProduct,
                msg: 'Producto agregado con éxito',
            });
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                msg: error.message || 'Error en el servidor',
                data: null,
            });
        }
    },
};
