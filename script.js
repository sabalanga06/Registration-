document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()
});

function onFormSubmit() {
  var formData = readFormData();
  insertNewRecord(formData);
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["fullname"] = document.getElementById("fullname").value;
  formData["email"] = document.getElementById("email").value;
  formData["website"] = document.getElementById("website").value;
  formData["phonenumber"] = document.getElementById("phonenumber").value;
  formData["gender"] = document.querySelector('input[name="gender"]:checked').value;
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
  s=""
  for (var i = 0; i < checkboxes.length; i++) {
      s += checkboxes[i].value + " ";
  }
  formData["skills"] = s;
  console.log(formData["skills"]);
  return formData;

  // formData["Image"] = document.querySelector("#Image-input").value;
  // var upload_images="";
  // Image.addEventListener("change",function(){
  //   const reader =new FileReader();
  //   reader.addEventListener("load",() => {  upload_images=reader.result; document.querySelector("#Images").style.backgroundImage})


  // });
  
}
function insertNewRecord(data) {
  var table = document.querySelector("tbody");
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.website;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.phonenumber;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.gender;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.skills;
   // cell1 = newRow.insertCell(0);
  // cell1.innerHTML = data.Image;
}

function resetForm() {
  let inputs = document.querySelectorAll('input');
      inputs.forEach(input => input.value = '');
      var ele = document.getElementsByName("gender");
      for(let i=0; i < ele.length; i++) {
          ele[i].checked = false;
      }
      document.querySelectorAll('input[type="checkbox"]')
  .forEach(el => el.checked = false);
  document.getElementById("fullname").value = '';
  document.getElementById("email").value = '';
  document.getElementById("phonenumber").value = '';
  document.getElementById("website").value = '';
}