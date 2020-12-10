whatCanIDrink = function (age){
    if (age < 0){
        return "Sorry, I cannot tell what drink because that age is incorrect!";
    }
    if (age>0 && age <14){
        return "Drink Toddy"
    }
    if (age >= 14 && age <18){
        return "Drink Coke";
    }
    if (age >=18 && age < 21) {
        return ("Drink Beer");
    }
    if (age >21 && age < 130){
        return ("Drink Whisky");
    }
    if (age > 130){
        return ("Drink whatever you can get!");
    }
    if (age == String){
        return("Sorry, you gotta give me a number!")
    }
};