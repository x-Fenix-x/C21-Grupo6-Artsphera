module.exports = {
   carrito: (req, res) => {
      return res.render('carrito');
   },
   login: (req, res) => {
      return res.render('login');
   },
   productDetail: (req, res) => {
      return res.render('productDetail');
   },
   register: (req, res) => {
      return res.render('register');
   },
};
