function receivesAFunction(param){
  return param()
}

receivesAFunction( function () { 2 + 4 } );

function returnsANamedFunction (){
  return function splitWood(){
    return 1000/5
  }
}

function returnsAnAnonymousFunction(){
  return function(){
    return 3*6
  }
}