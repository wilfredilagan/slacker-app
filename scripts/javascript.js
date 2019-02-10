var user = {
    "user": {
     "name": "Kat",
     "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
     "full-name" : "Katherine Vicks",
     "phone" : "416-382-3820",
     "city" : "Toronto, ON",
     "email" : "kat@myemail.com",
     "street" : "34 Leval St, M63 3N2",
     "description" : "Strong user experience (UX) design skills. Experience in user research and interaction design gained through corporate and nonprofit externships. Completed three externships during summer breaks to gain experience in UX design and information architecture. Excels at managing usability testing for XYZ landing pages in preparation for Web site redesign. Very competent in testing parameters, prepared prototypes, recruited users, facilitated tests and reported results."
    }
}
$("#name").html(user.user["full-name"]);
$("#username").html(user.user["name"]);
$("#location").html(user.user["city"]);
$("#phone").html(user.user["phone"]);
$("#address").html(user.user["street"]);
$("#email").html(user.user["email"]);
$("#description").html(user.user["description"]);
$("#image").attr("src",user.user["image"]);