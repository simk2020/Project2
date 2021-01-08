const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const chalk = require('chalk');
console.log(chalk.blue('Welcome to Peace and Mind'));

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 4568;

const sess = {
  secret: 'myPassword',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);
app.get('/',(req,res)=>{
  console.log ("it works")
  res.render ("container-main")
})

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening http://localhost:' + PORT));
});