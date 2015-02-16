//Craig Austgen
//In class example


FRUIT_FILE = "[\n  " + [
'{ "typeOf" : "apple", "color" : "red"}',
'{ "typeOf" : "orange", "color": "orange"}',
'{ "typeOf" : "banana", "color" : "yellow"}'].join(",\n  ") + "\n]";

if (typeof module != "undefined" && module.exports)
  module.exports = FRUIT_FILE ;
