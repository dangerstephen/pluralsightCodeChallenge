var input = ["KittenService: CamelCaser","CamelCaser: "];
var output = [];
output.push(input);
$('.content').append('<div class="card"><p>[ '+ input +' ]</p></div>');


function Order(input) {
  if (input.length === 0){
    $('.content').append('<div class="card"><p>Sorry the information provided is invalid, please try again</p></div>');
    console.log("Sorry the information provided is invalid, please try again");
  } else {
    $('.content').append('<div class="card"><p>'+ output +'</p></div>');
    console.log(input);
  }
}

Order(input);
