// CALCULAR PRECIO FINAL

const priceFinal = (price, discount) => {
    return Math.round(price - (price * discount) / 100);
};

module.exports = priceFinal;
