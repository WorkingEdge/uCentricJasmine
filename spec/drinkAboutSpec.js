describe("drinkAgeTest", function() {
        it ("For the non-numbers", () =>{
            expect(whatCanIDrink(String)).toBe("Sorry, you gotta give me a number!")
        });    
        it ("For the Unborn", function() {
            expect(whatCanIDrink(-1)).toBe("Sorry, I cannot tell what drink because that age is incorrect!");
        });
        it ("For the under-14s", () =>{
            expect(whatCanIDrink(12)).toBe("Drink Toddy");
        });
        it ("For the teenagers", () =>{
            expect(whatCanIDrink(15)).toBe("Drink Coke");
        });
        it ("For students", () => {
            expect(whatCanIDrink(19)).toBe("Drink Beer");
        });
        it ("For the rest of us", () =>{
            expect(whatCanIDrink(44)).toBe("Drink Whisky");
        });
        it ("For the undead", () =>{
            expect(whatCanIDrink(131)).toBe("Drink whatever you can get!")
        })    
    });
