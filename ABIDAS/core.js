// The Document Object Model (DOM)




console.log(window);

let value;

console.log(document.location);


value = document.location.host;
value = document.location.href;
value = document.location.hostname;
value = document.location.pathname;
value = document.characterSet;
value = document.lastElementChild;
value = document.title;
value = document.links;
value = document.links.item(4).getAttribute("class");

console.log(value);








let value;

const title = document.getElementById("btn");
document.getElementsByTagName("section");
document.getElementsByClassName("sectionTag text-big")	

// Note for me. We are using  those elements to find or obtain their places. So these methods are appended to the end of the "ID" "TagName" "ClassName" objects.


console.log(value);
