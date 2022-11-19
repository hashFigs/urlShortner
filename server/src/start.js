const mongoose = require('mongoose');
const app = require('./app');

require('dotenv').config();

mongoose
  .connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Listen.
    app.listen(process.env.PORT);
    console.log(`Ready to short urls ${process.env.PORT}`);
  });
