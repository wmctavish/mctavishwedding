
var parent = document.getElementById("rsvpform");
//var name1 = document.getElementById('name1').value;
//var name2 = document.getElementById('name2').value;
//var meal1 = document.getElementById('meal1').value;
//var meal2 = document.getElementById('meal2').value;

parent.addEventListener('click', event => {
    if(event.target.id === 'submit') {
      var name1 = document.getElementById('name1').value;
      var name2 = document.getElementById('name2').value;
      var meal1 = document.getElementById('meal1').value;
      var meal2 = document.getElementById('meal2').value;
      function formSubmit() {
        if(name1.trim() == '') {
            alert('Please enter a name');
            return;
        } else {
            if(document.getElementById("yes").checked) {
            console.log("We're coming!");
            console.log(name1);
            console.log(name1 + " will be having " + meal1);
            console.log(name2);
            console.log(name2 + " will be having " + meal2);
          } else if(document.getElementById("no").checked) {
                console.log("We're unable to attend");
                console.log(name1);
                console.log(name2);
          };
        };
      };
      formSubmit()
    };
});