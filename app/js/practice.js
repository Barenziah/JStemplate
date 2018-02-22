(function() {
'use strict';

    /**
     * Import Selector
     **/
    var mainDoc = document;
    var link = mainDoc.querySelector('link[rel="import"]');

    /**
    * Import template
    **/
    var content =  link.import.querySelector('template').content;
    var clone = mainDoc.importNode(content, true);

    /**
    * appendChild node into mainDoc
    **/
    mainDoc.querySelector('.comment-list').appendChild(clone);
    
    function selector(className){
        return mainDoc.getElementsByClassName(className).innerHTML
    }

    function stringObj(className){

        // Searching within a String
        let stringObj = new String("This is a string object.");
        let includes = stringObj.includes('string');
        let endsWith = stringObj.endsWith('string');
        let startsWith = stringObj.startsWith('string');

        let regexp = /[A-E]/gi; 
        let match = stringObj.match(regexp);
        let search = stringObj.search(regexp);
        
        console.log('Print String Obj : ', stringObj);
        console.log('Includes "string" ? ', includes);
        console.log('endsWith "string" ? ', endsWith);
        console.log('startsWith "string" ? ', startsWith);
        console.log('match "string" ? ', match);
        console.log('search "string" ? ', search);
        
        // Returning a Substring
        let slice = stringObj.slice(1, 8);
        let split = stringObj.split(',', 3);
        let substring = stringObj.substring(0, 3);
        
        console.log('slice String Obj:', slice);
        // ?
        console.log('split String Obj:', split);
        console.log('substring String Obj:', substring);
        
        // Returning Index
        let indexOf = stringObj.indexOf('i');
        let lastIndexOf = stringObj.lastIndexOf('i');
        
        console.log('indexOf String Obj:', indexOf);
        console.log('lastIndexOf String Obj:', lastIndexOf);
        
    }
    function numberObj(className){
        let numberObj = new Number(22);
        console.log(numberObj);
        
    }

    function arrayObj(className){
        let arrayObj = new Array(1,2,3,4,5);
        let arrayObjLength = new Array(10);
        let arr = [1,2,3,4,5,6,7]
        console.log('arrayObj: ' , arrayObj);
        console.log(' 0 arrayObj:', arrayObj[0]);
        console.log(' 1 arrayObj:', arrayObj[1]);
        console.log(' 0 arr:', arr[0]);
        console.log(' 1 arr:', arr['1']);
        console.log(arrayObjLength);
    }

    

    stringObj('.stringObj');
    numberObj('.numberObj');
    arrayObj('.arrayObj');


    function logArr(){
        var ul = document.createElement('ul');

        var arr  = [1,46,32,4,3,4,5,6345];

        for(var i = 0; i < arr.length; i++){

            var node = document.createElement('li');
            var testInNode = document.createTextNode(arr[i]);
    

            node.appendChild(testInNode);
            node.addEventListener('click', function(){
                alert(i);
            })

            ul.appendChild(node);
        }
        
        document.body.appendChild(ul);
        
    }

    logArr();
})()