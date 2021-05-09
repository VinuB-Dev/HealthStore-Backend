const mongoose = require('mongoose');

const uri =
  `mongodb+srv://vignesh1234:${process.env['Password']}@vigneshbs.bo8tk.mongodb.net/inventory?retryWrites=true&w=majority`;

const connection = async() => {
  
  await mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("successfully connected"))
  .catch(error => console.error("mongoose connection failed..", error))
}

  module.exports = {connection};