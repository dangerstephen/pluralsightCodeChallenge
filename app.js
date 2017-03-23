// var input = ["KittenService: CamelCaser","CamelCaser: "];
// This should return "CamelCaser, KittenService"

// var input =["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "];
// This should return "KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream"

var input =["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme"];
// This should be rejected because of the cycle

var output = [];
$('.content').append('<div class="card"><p>[ '+ input +' ]</p></div>');


function pkgOrder(input) {
  if (input.length === 0){
    $('.content').append('<div class="card"><p>Sorry the information provided is invalid, please try again</p></div>');
    console.log("Sorry the information provided is invalid, please try again");
  } else {
    for (var i = 0; i < input.length; i++) {
            pkgInstall(input[i].trim());
        }
    $('.content').append('<div class="card"><p>'+ output +'</p></div>');
    console.log(input);
  }
}

function pkgSearch(pkg) {
    for (var i = 0; i < input.length; i++) {
        var pkgParas = input[i].trim().split(':');

        if (pkgParas[0] != '' && pkgParas[0].indexOf(pkg) > -1) {
            return input[i];
        }
    }
    return null;
}

function pkgCheck(pkg) {
    return output.indexOf(pkg) > -1;
}

function pkgInstall(pkg) {
    var pkgParas = pkg.split(':');

    if (pkgParas.length > 1 && pkgParas[1].trim() != '') {
        var dependency = pkgParas[1].trim();
        var pkgSearchResult = pkgSearch(dependency);

        if (pkgSearchResult != null) {
            pkgInstall(pkgSearchResult);
        } else {
            output.push(dependency);
        }
    }
    if (pkgCheck(pkgParas[0].trim())) {
        return;
    }

    else  {
        output.push(pkgParas[0].trim());
    }
}

pkgOrder(input);
