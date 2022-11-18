// Models
const Url = require('../models/urls.js');


class UrlController {

static async getUrl(urlId) {
    const url = await Url.findOne({ _id: mongoose.Types.ObjectId(urlId) });
    if (!url) throwError('Invalid url Id');

    return url;
  }

static async addUrl(formData) {
    console.log('body', formData)
    const url = new Url();
          url.originalUrl = formData.url;
    await url.save();
    
    return (url);
}  

static async getUrls() {
    const urls = await Url.find({})
    
    return(urls);  
     
}

}


module.exports = UrlController;
