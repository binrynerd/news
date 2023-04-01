const router = require("express").Router();
const axios = require("axios");

router.get("/", async(req, res) => {

  // const options = {
  //   method: "GET",
  //   url: "https://raddy.dev/wp-json/wp/v2/posts/",
  // };
  //   axios.request(options).then((response)=>{

  //     res.render('dashboard', {articles:response.data})        
  //   }).catch((err)=> console.log(err))
  try {
    const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/`)
    res.render('dashboard', { articles : newsAPI.data })
} catch (err) {
    if(err.response) {
        res.render('news', { articles : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    } else if(err.request) {
        res.render('news', { articles : null })
        console.log(err.request)
    } else {
        res.render('news', { articles : null })
        console.error('Error', err.message)
    }
} 



});

module.exports = router;
