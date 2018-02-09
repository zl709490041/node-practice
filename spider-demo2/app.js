var http = require("http");
var fs = require("fs");
var cheerio = require("cheerio");

const wz = "http://news.baidu.com";

var strHtml = "";
var results = [];

http.get(wz,function(res){
    res.on("data",function(chunk){
        strHtml += chunk;
    });
    res.on("end",function(){
        
        var $ = cheerio.load(strHtml);

        $("#channel-all li").each((item,i)=>{
            console.log($(i).text());
        })
    })
})