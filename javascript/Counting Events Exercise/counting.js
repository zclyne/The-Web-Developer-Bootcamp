//https://developer.mozilla.org/en-US/docs/Web/Events
//This method is no longer useful on the website, but the result is trivial
//What is important is the use of document.querySelectorAll()
//On the previous version of this website, each event corresponds to an 'tr'
//Therefore, the counting can be done by counting the number of trs on the website
var len = document.querySelectorAll("tr").length;
var numOfTable = document.querySelectorAll("table").length;
len = len - numOfTable;//There used to be several tables on the page, and the header of each table should be deducted from the length
