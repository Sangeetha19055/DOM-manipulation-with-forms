var submit = document.getElementById("submit");
submit.addEventListener("click", function (ele) {
ele.preventDefault();

var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var address = document.getElementById("address");
var pincode = document.getElementById("pincode");
var gender = document.getElementById("gender");
var food = document.getElementById("food");
var state = document.getElementById("state");
var country = document.getElementById("country");
     if(firstname.value === "")
    {
        alert("Name cannot be Empty. Please! Enter the Firstname.")
        return false;
    } 
    else if(lastname.value === "")
    {
        alert("Name cannot be Empty. Please! Enter the Lastname.");
        return false;
    }
   else if(address.value === "")
    {
        alert("Address cannot be Empty. Please! Enter the Address.");
        return false;
    }
    else if(pincode.value === "")
    {
        alert("Pincode cannot be Empty. Please! Enter the Pincode.");
        return false;
    }
    else if(state.value === "")
    {
        alert("State cannot be Empty. Please! Enter the State.");
        return false;
    }
    else if(country.value === "")
    {
        alert("Country cannot be Empty. Please! Enter the Country.");
        return false;
    }

//get element by name returns the collections of elements collection obj
var gender = document.getElementsByName("gender");
console.log(gender);
var gendervalue;
for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
        console.log(gender[i].checked);
        gendervalue = gender[i].value;
        console.log(gendervalue);
    }
}

if(gender[0].checked === false && gender[1].checked === false)
{
    alert("Gender cannot be Empty. Please!!! select the gender.");
    return false;
}


//for food js
var food = document.getElementsByName("food");
console.log(food);
var foodList = [];
// var foodCount = 0;
console.log(food);
for (var i = 0; i < food.length; i++) {
    if (food[i].checked) {
        foodList.push(food[i].value);
        // foodCount++;
        console.log(foodList);
    }
}

if (foodList.length >= 2) {
    var result = foodList.join(",");
    console.log(result);
} else {
    result = alert("Please!!! Choose atleast 2 foods.");
    return false;

}

createTable(firstname.value,
    lastname.value,
    address.value,
    pincode.value,
    gendervalue,
    result,
    state.value,
    country.value)

})


//----------------Function for check box checkbox to clear the values--------------------------------
function clearCheckbox()
{
var items=document.getElementsByName("food");
for(var i=0;i<items.length;i++)
{
    if(items[i].type=='checkbox')
      items[i].checked = false;
}  
}
//-----------------Function for check box Radio button to clear the values----------------------------
function clearRadiobutton()
{
var items=document.getElementsByName("gender");
for(var i=0;i<items.length;i++)
{
    if(items[i].type=='radio')
      items[i].checked = false;
}  
}




var firstname = document.getElementById("firstname");
console.log(firstname);
var lastname = document.getElementById("lastname");
var address = document.getElementById("address");
var pincode = document.getElementById("pincode");
var gender = document.getElementById("gender");
var food = document.getElementById("food");
console.log(food);
var state = document.getElementById("state");
var country = document.getElementById("country");

//-----------------Function For creating Table--------------------------------------------------------
function createTable(firstname, lastname, address, pincode, gender, food, state, country) {
console.log(firstname);

var tbody = document.getElementById("tbody");
var tr = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var td3 = document.createElement("td");
var td4 = document.createElement("td");
var td5 = document.createElement("td");
var td6 = document.createElement("td");
var td7 = document.createElement("td");
var td8 = document.createElement("td");
td1.innerHTML = firstname;
td2.innerHTML = lastname;
td3.innerHTML = address;
td4.innerHTML = pincode;
td5.innerHTML = gender;
td6.innerHTML = food;
td7.innerHTML = state;
td8.innerHTML = country;
tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
tbody.append(tr);



    //TO clear the textbox after the data is deleted.
    document.getElementById("firstname").value = null;
    document.getElementById("lastname").value = null;
    document.getElementById("address").value = null;
    document.getElementById("pincode").value = null;
    clearRadiobutton();
    clearCheckbox();
    document.getElementById("state").value = null;
    document.getElementById("country").value = null;
    alert("Your data is added successfully!")
}


