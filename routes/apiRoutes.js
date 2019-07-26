var router = require("express").Router();
var cheerio = require("cheerio");
var axios = require("axios");

//get route for scraping

router.get("/scrape", (req, res) => {
  console.log("\n***********************************\n" +
    "Grabbing every story about Florida Man\n" +
    "from floridaman.com :" +
    "\n***********************************\n");


  axios.get("https://floridaman.com/").then(function (response) {


    var $ = cheerio.load(response.data);


    var results = [];


    $("article.entry-tpl-grid").each(function (i, element) {


      var article = $(element).find("h3").text();

      var link = $(element).find("a").attr("href");

      var imgLink = $(element).find("a").find("img").attr("data-srcset").split(",")[0].split(" ")[0];



      results.push({
        article: article,
        link: link,
        imgLink: imgLink
      });
    });

    // Log the results once you've looped through each of the elements found with cheerio
    console.log(results);
  });
res.send("scrape complete");
});


module.exports = router;