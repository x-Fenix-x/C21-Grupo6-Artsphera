// CALCULAR PRECIO FINAL

const priceFinal = (price, discount) => {
    const discountedPrice = price - price * (discount / 100);
    const priceFinal =
        discountedPrice % 1 !== 0
            ? discountedPrice.toLocaleString('es-AR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
              })
            : discountedPrice.toLocaleString('es-AR', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
              });

    return priceFinal;
};

module.exports = priceFinal;
