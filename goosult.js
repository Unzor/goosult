async function goosult(sq) {
var page = await fetch(location.protocol + "//cors-bypass-app.herokuapp.com/get?url=https://www.google.com/search?q=" + encodeURIComponent(sq));
page = await page.text();

var dom = new DOMParser().parseFromString(page, "text/html")

var e2 = [];

var all_elements = Array.from(dom.querySelectorAll("h3")).map(x => x.innerHTML.split(">")[1].split("<")[0]);

all_elements.forEach(function(en){
  if (!en.startsWith("<span ") && !en.endsWith("</span>") && en !== "Videos" && en !== "Images" && en !== "Top stories" && en !== "") {
    e2.push(en);
  }
})

return e2;
}
