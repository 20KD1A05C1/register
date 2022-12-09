function sub(){
   
    var Name=document.getElementById("name").value;
    var Mobile=document.getElementById("mobile").value;
    var Gen=document.getElementById("gender").value;
    var Dob=document.getElementById("dob").value;
    var Mail=document.getElementById("mail").value;
    var skill=document.getElementById("skills").value;
    document.write("<h1>INTERNSHIP REGISTRATION DETAILS</h1>"+"<br><br>");
    document.write("Name:"+Name+"<br><br>");
    document.write("Mobile:"+Mobile+"<br><br>");
    document.write("Gender:"+Gen+"<br><br>");
    document.write("DOB:"+Dob+"<br><br>");
    document.write("eMail:"+Mail+"<br><br>");
    document.write("Skills:"+skill+"<br><br>");
    document.write("<h2>"+"Status:REGISTERED SUCCESSFULLY..."+"</h2>"+"<br><br>");
    document.write("<h3>"+"we will contact you soon..."+"</h3>"+"<br><br>");
    
}
function save(){
    var Name=document.getElementById("name").value;
    var Mobile=document.getElementById("mobile").value;
    var Gen=document.getElementsByName("gender").value;
    var Dob=document.getElementById("dob").value;
    var Mail=document.getElementById("mail").value;
    var skill=document.getElementById("skills").value;
    document.write("<h1>INTERNSHIP REGISTRATION DETAILS</h1>"+"<br><br>");
    document.write("Name:"+Name+"<br><br>");
    document.write("Mobile:"+Mobile+"<br><br>");
    document.write("Gender:"+Gen+"<br><br>");
    document.write("DOB:"+Dob+"<br><br>");
    document.write("email:"+Mail+"<br><br>");
    document.write("Skills:"+skill+"<br><br>");
    document.write("<h2>"+"Status:REGISTERED SUCCESSFULLY..."+"</h2>"+"<br><br>");
    document.write("<h3>"+"we will contact you soon..."+"</h3>"+"<br><br>");
   
    print();
}