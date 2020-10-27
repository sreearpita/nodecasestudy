const Products = require('../models/product');
const Order = require('../models/order');
const User = require('../models/user');

exports.getProducts = (req, res, next) => {
  console.log('in get products');
  Products.findAll()
    .then(products => {
      res.render('user/productList', { prods: products });
    })
    .catch(err => console.log(err));
};

exports.getProductById = (req, res, next) => {
  console.log(req.params.pid);
  console.log('inside get by id');
  const prodId = req.params.pid;
  console.log(prodId)
  Products.findByPk(prodId)
    .then(product => {
      res.render('user/productDetails', { product: product })
    })
}

exports.postOrderproduct = (req, res, next) => {
  //console.log(req.body.id);
  uid = req.session.user;
  //console.log(uid);
  pid = req.body.id;
  payId = uid+pid;
  Products.findByPk(pid)
  .then(product => {
    price = product.price;
    Order.create({
      payment_id: payId,
      payment_total: price,
      userId: uid
    }).then(result=>{
      result.setProducts(pid)
      .then(result=>{
        console.log("setting prod to order");
      });
    })
    .catch(error=>{
      console.log(error);
    })
  }).catch(error=>{
    console.log(error);
  })
 
  res.redirect('/user/products');
};

// exports.getOrders = (req, res, next) => {
//   const userId = req.params.uid;
//   console.log(req.params.uid);
//   //   Order.findByPk({where: {userId : userId} })
//   // res.render()

// }