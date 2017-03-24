// This is my main JS file to run when provided a given input

$(document).ready(function() {


function generate(input) {
    $('.appending').append('<div class="card"><h1 class="title">Original Input:</h1><p>[ ' + input + ' ]</p></div>');
    console.log("Original Input: " + input);
    if (input.length === 0) {
        $('.appending').append('<div class="card"><p>Sorry the information provided is invalid, please try again</p></div>');
        console.log("Sorry the information provided is invalid, please try again");
    } else {
        for (var i = 0; i < input.length; i++) {
            pkgInstall(input[i].trim());
        }
        $('.appending').append('<div class="card"><h1 class="title">Output:</h1><ol><li>'+ result.join("</li><li>") + '</li></ol></div>');
        console.log("Output: " + result);
    }
}

function pkgSearch(pkg) {
    for (var i = 0; i < input.length; i++) {
        var pkgParas = input[i].trim().split(':');
        if (pkgParas[0] != '' && pkgParas[0].indexOf(pkg) > -1) {
            return input[i];
        }
    }
    return false;
}



function pkgInstall(pkg) {
    var pkgParas = pkg.split(':');

    if (pkgParas[1].trim() != '' && pkgParas.length > 1  ) {
        var dependency = pkgParas[1].trim();
        var pkgSearchResult = pkgSearch(dependency);

        if (pkgSearchResult != false) {
            pkgInstall(pkgSearchResult);
        } else {
            result.push(dependency);
        }
    }


    function pkgCheck(pkg) {
        return result.indexOf(pkg) > -1;
    }

    if (pkgCheck(pkgParas[0].trim())) {
        return;
    } else {
        result.push(pkgParas[0].trim());
        if (result.length != input.length) {
            $('.appending').append('<div class="card errors"><h1 class="title">Output:</h1><p>Sorry the information provided is invalid, please try something that isnt a cycle</p></div>');
        } else if (result.length === input.length) {
            $('.errors').addClass('hidden');
        } else {
            $('.appending').append('<div class="card errors"><p>This is awkward. But an unecptected error occured</p></div>');
        }

    }

}

var input = [];
// var input = ["KittenService: CamelCaser","CamelCaser: "];
    // This should return "CamelCaser, KittenService"

var input = ["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "];
    // This should return "KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream"

// var input = ["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme"];
    // This should be rejected because of the cycle

var result = [];

generate(input);

});
