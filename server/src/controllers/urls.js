var { nanoid } = require("nanoid");

// Models
const Url = require('../models/urls.js');

class UrlController {

static async getOriginalUrl(urlId) {
    const url = await Url.findOne({ shortUrl: urlId });
    if (!url) Error('Invalid url Id');

    return url.originalUrl;
  }

static async convertUrl(formData) {
    //check if already exist
    const checkUrl = await Url.findOne({ originalUrl: formData.url });
    if (checkUrl) throw Error('url Already exxist'); 
    
    //generate a unique Id
    const urlId = nanoid();
    const base = process.env.SERVER_URL;
    
    //store original url, shortUrl
    const url = new Url();
          url.originalUrl = formData.url;
          url.shortUrl = `${base}/${urlId}`;
    await url.save();
    
    return (url);
}  

static async addUrl(formData) {
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
