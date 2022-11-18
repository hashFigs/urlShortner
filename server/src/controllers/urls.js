// Models
const Url = require('../models/urls.js');


class UrlController {

static async getUrl(urlId) {
    const url = await Url.findOne({ _id: mongoose.Types.ObjectId(urlId) });
    if (!url) throwError('Invalid url Id');

    return url;
  }

static async addUrl(formData) {
    console.log(formData)
    const url = new Url(formData);
    await url.save();
    
    return (url);
}  

static async getUrls() {
    const urls = await Url.find({})
    
    return(urls);  
     
}

}


module.exports = UrlController;
