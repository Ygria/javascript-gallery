function showPic(whichpic){
    console.log("hello there");
    var source = whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source)
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue=text;
}

function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

function prepareGallery(){
    //实现平稳退化：当获取不到tagName时，说明浏览器不支持js
    console.log("hhh");
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("imagegallery"))return false;

    console.log("hhh");
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0;i<links.length;i++){
        links[i].onclick = function(){
            showPic(this);
            return false;
        }
    }
}

//这种写法可以在页面加载时
window.onload = function(){
    console.log("window onload");
    prepareGallery();
}

//window.onload = countBodyChildren;