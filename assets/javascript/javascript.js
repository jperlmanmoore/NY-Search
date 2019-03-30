

  $(document).ready(function(){
    $("#txt_name").keyup(function(){
        alert($(this).val());
    });
})



$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

const search = "";
const recordNumber;
const startYear;
const endYear;


var results = response.data;

  

  for (var i = 0; i < results.length; i++) {

  var searchResults = $("<div>");

  
  //animalImage.attr();
  
  // Append the p variable to the animalDiv variable.
 // animalDiv.append(p);

  // Append the animalImage variable to the animalDiv variable.
    //animalDiv.append(animalImage);
  
  // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
    //$("#gifs-appear-here").prepend(animalDiv);

  // ============= put step 3 in between these dashes ======================

  // ==================================
  }

});