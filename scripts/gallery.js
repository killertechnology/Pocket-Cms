
console.log("Want to see a gallery?");

var src = "";

console.log("creating gallery box");
var gm = document.createElement('div');
gm.id = 'myGalleryModal';
document.getElementById('js-main-content').appendChild(gm);



var galleryHTML = "<link rel=\"stylesheet\" type=\"text/css\" href='//globalsearch.mousetrap.cc/css/searchmodal.css'>";

galleryHTML += "<!-- The Gallery-->";
//galleryHTML += "<div id=\"mySearchModal\">";
galleryHTML += "<div class=\"gallery-content\" style='background-color:white;'>THIS IS MY GALLERY";
galleryHTML += "  <span class=\"close\">&times;</span>";
//galleryHTML += "<p><input id='searchq' name='searchq' type='text' value='enter keyword' onBlur=\"javascript:Clear2('searchq');\" onClick=\"javascript:Clear2('searchq');\"></input>&nbsp;<a href='javascript:void(0);' onclick='javascript:doSearch();'><img src='http://photos.mousetrap.cc/images/arrow-go.png' height=20 width=20></a></p>";
galleryHTML += "</div>";
//galleryHTML += "<div class='searchResults' id='searchResults' style='background-color:white;'></div>";

//modalHTML += "</div>";

console.log("loading gallery modal");
var gallery = document.getElementById('myGalleryModal');
if (gallery != null) {

    console.log('gallery console activated');
    gallery.setAttribute('class', 'gallery');
    gallery.innerHTML = galleryHTML;

    window.onclick = function (event) {
        if (event.target == gallery) {
            //modal.style.display = "none";
        }
    }
}
else {
    console.log('gallery object not found');
}



function Clear2(str2) {
    var aa1 = document.getElementById(str2);
    if ((aa1.value == "enter keyword")) {
        document.getElementById(str2).value = "";
    }

    if (aa1.value == "") {
        
        document.getElementById(str2).style.backgroundColor = "#ffcccc";
    } else {
        document.getElementById(str2).style.backgroundColor = "#ffffff";
    }
}

function Clear2b(str2) {
    var aa1 = document.getElementById(str2);
    if (aa1.value == "") {
        document.getElementById(str2).style.backgroundColor = "#ffcccc";
    } else {
        document.getElementById(str2).style.backgroundColor = "#ffffff";
    }
}

function openSearch() {
    //alert(event);

    if (modal != null) {
        modal.style.display = "block";
        //alert(modal.innerHTML);
    }

    return false;
}


