
console.log("Have you come to search for something??");

//if (!window.jQuery) {
//    console.log("loading jQuery");
//    var jq = document.createElement('script'); jq.type = 'text/javascript';
//    // Path to jquery.js file, eg. Google hosted version
//    jq.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
//    document.getElementsByTagName('head')[0].appendChild(jq);
    
//}
//console.log("loaded");
console.log("creating search box");
var src = "";


var msm = document.createElement('div');
msm.id = 'mySearchModal';
document.getElementById('js-main-content').appendChild(msm);



var modalHTML = "<link rel=\"stylesheet\" type=\"text/css\" href='//globalsearch.mousetrap.cc/css/searchmodal.css'>";
modalHTML += "<!-- Trigger/Open The Modal -->";
modalHTML += "<!-- The Modal -->";
//modalHTML += "<div id=\"mySearchModal\">";
modalHTML += "<div class=\"modal-content\" style='background-color:white;'>";
modalHTML += "  <span class=\"close\">&times;</span>";
modalHTML += "<p><input id='searchq' name='searchq' type='text' value='enter keyword' onBlur=\"javascript:Clear2('searchq');\" onClick=\"javascript:Clear2('searchq');\"></input>&nbsp;<a href='javascript:void(0);' onclick='javascript:doSearch();'><img src='http://photos.mousetrap.cc/images/arrow-go.png' height=20 width=20></a></p>";

modalHTML += "<br><div id='searchResults'><br></div>";
modalHTML += "</div>";


//modalHTML += "</div>";

console.log("loading search modal");
var modal = document.getElementById('mySearchModal');
if (modal != null) {

    console.log('search console activated');
    modal.setAttribute('class', 'modal');
    modal.innerHTML = modalHTML;

    window.onclick = function (event) {
        if (event.target == modal) {
            //modal.style.display = "none";
        }
    }
}
else {
    console.log('modal object not found');
}



function doSearch() {
    var input = document.getElementById('searchq').value;
    
    console.log('searching for... ' + input);
    var searchResults = document.getElementById('searchResults');
    $.ajax({
        url: "http://dev-tac-web01.tacobell.com/nutritiondata/allproducts.json",
        //force to handle it as text
        dataType: "text",
        success: function (data) {

            //data downloaded so we call parseJSON function 
            //and pass downloaded data
            var json = $.parseJSON(data);
            console.log('parsing data');
            var json_arr = [];
            searchResults.innerHTML = "";
            $.each(json.menu_items, function (key, value) {
                //json_arr.push(key + '. ' +  + "<BR>");
                if (value.name.toLowerCase().indexOf(input) > -1) {
                    //(key + 1) + ". " + 
                    searchResults.innerHTML += value.name.replace('"','') + "<BR>";
                }
            });
            searchResults.style.display = "inline";
            //searchResults.innerHTML = json_arr;
        }
    });
    

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


