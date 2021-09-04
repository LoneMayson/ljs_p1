// static properties
"use strict"
let log = console.log;

class Article
{
    constructor(title, date)
    {
        this.title = title;
        this.date = date;
    }
    static createToday()
    {
        return new this("Today article", new Date());
    }
}

var ci = Article.createToday();
log(ci); // Article {title: 'Today article', date: Wed Sep 01 2021 14:41:08 ..}