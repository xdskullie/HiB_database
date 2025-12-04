function submitProfileForm() {
    var customerName = document.getElementById("customerName").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var dogName = document.getElementById("dogName").value;
    var age = document.getElementById("age").value;
    var date = document.getElementById("date").value;

    if (!customerName || !mail || !phone || !dogName || !age || !date) {
        alert("Vänligen fyll i alla fält innan du skickar in formuläret.");
        return false;
    }
    
    document.getElementById("profileInformation").innerHTML = "Name: " + customerName + "<br>" + "Mail: " + mail + "<br>" + "Phone: " + phone + "<br>" + "Dog Name:" + dogName + "<br>" + "Age: " + age + "<br>" + "Registered date: " + date;

}

