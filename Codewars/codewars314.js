// Functional closures can get overly attached. Set them straight!

// Why doesn't greet_abe() actually greet Abe?

var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};

function greet_abe(name) {
    var name = 'Abe';
    return "Hello, " + name + '!';
  };
  
  var greet_ben = function(name) {
    var name = 'Ben';
    return "Hello, " + name + '!';
  };

//   refactored to:
var name = '';
var greet_abe = function() {
  name = 'Abe'
  return "Hello, " + name + '!';
};

var greet_ben = function() {
  name = 'Ben';
  return "Hello, " + name + '!';
};

// was surprised that there were so few completed 