var doc = document

var demo = doc.getElementById('demo');
var h2 = doc.createElement('h2');
h2.innerHTML = "Choose Your Maritial Status"
demo.appendChild (h2)

var input = doc.createElement ('INPUT');
input.setAttribute("type" , "radio");
input.setAttribute("id" , "single");
input.setAttribute("name" , "marital_status");
input.setAttribute("value" , "single");
demo.appendChild (input);

var label = doc.createElement ("label");
label.innerHTML = "Single"
demo.appendChild (label)

var input = doc.createElement ('INPUT');
input.setAttribute("type" , "radio");
input.setAttribute("id" , "married ");
input.setAttribute("name" , "marital_status");
input.setAttribute("value" , "married ");
demo.appendChild (input);

var label = doc.createElement ("label");
label.innerHTML = "Married "
demo.appendChild (label)

var input = doc.createElement ('INPUT');
input.setAttribute("type" , "radio");
input.setAttribute("id" , "other");
input.setAttribute("name" , "marital_status");
input.setAttribute("value" , "other");
demo.appendChild (input);

var label = doc.createElement ("label");
label.innerHTML = " Do not share"
demo.appendChild (label)