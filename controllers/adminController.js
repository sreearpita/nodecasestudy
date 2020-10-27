const Products = require('../models/product');

exports.getProducts = (req, res, next) => {
  console.log(req.session.user)
  console.log('in get products');
  Products.findAll()
    .then(products => {
      res.render('admin/productList', { prods: products });
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
      res.render('admin/productDetails', { product: product })
    })
}

exports.getAddProduct = (req, res, next) => {
  res.render('admin/addProduct');
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body.name);
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const currency = req.body.currency;
  Products.create({
    name: name,
    description: description,
    price: price,
    currency: currency
  })
    .then(result => {
      console.log("product added");
      res.redirect('/admin/products');
    })

};

exports.getUpdateProduct = (req, res, next) => {
  console.log("the product id is: " + req.params.pid);
  const pid = req.params.pid;
  Products.findByPk(pid)
    .then(product => {
      res.render('admin/editProduct', { product: product })
    })
    .catch(error => {
      console.log(error)
    });
};

exports.postUpdateProduct = (req, res, next) => {
  //console.log(req.body.name);
  //console.log(req.params.pid);
  const price = req.body.price;
  const desc = req.body.description;
  const name = req.body.name;
  const curr = req.body.currency;
  const pid = req.params.pid;
  Products.findByPk(pid)
    .then(product => {
      product.name = name;
      product.description = desc;
      product.price = price;
      product.currency = curr;
      return product.save();
    }).then(result => {
      console.log("product updated");
      res.redirect('/admin/products')
    }).catch(error => {
      console.log(error);
    })

};

exports.postDeleteProduct = (req, res, next) => {
  console.log("inside delete product");
  const pid = req.body.id;
  console.log(pid);
  Products.findByPk(pid)
    .then(product => {
      console.log(product);
      return product.destroy();
    })
    .then(result => {
      console.log("deleted product");
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });

};
