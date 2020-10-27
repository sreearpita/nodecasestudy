//imports
const express = require('express');
const session = require('express-session');
const bodyparser = require('body-parser');
const SequelizeConn = require('./util/database')
const User = require('./models/user');
const Product = require('./models/product');
const Order = require('./models/order');
const OrderItem = require('./models/orderItem');


const app = express();
app.use(express.urlencoded({ extended: false }));

const adminRoutes = require('./routes/adminRoute');
const userRoutes = require('./routes/userRoute');
const commonRoutes = require('./routes/commonRoute');

//setting view engine as ejs and setting the views folder
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(session({ secret: 'my secret', resave: false, saveUninitialized: false }));

//including the routes
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use(commonRoutes);

//mappings
User.hasMany(Order);
Order.belongsTo(User);
Product.belongsToMany(Order, { through: OrderItem });
Order.belongsToMany(Product, { through: OrderItem });


//creates if non-existant and updates if any change, to the database elements
// SequelizeConn.sync({force : true}).then(() => {
SequelizeConn.sync().then(() => {
    console.log('tables sync');
});

app.listen(3000);