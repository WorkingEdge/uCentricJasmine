describe("fizztest", function (){
beforeEach(function() {
        new fizzBuzz();
    }); 
    it ("test both 3 and 5", function(){
expect(fizzBuzz(150)).toBe("Fizzbuzz!");
});
    it ("test 3", function (){
    expect(fizzBuzz(99)).toBe("Fizz!")
});
    it ("test 5", function (){
    expect(fizzBuzz(700)).toBe("Buzz!")
    })
    it ("test for number input", function (){
        expect(fizzBuzz("twenty")).toBe("Number please!")
    })
    it ("test returns number", ()=>{
        expect(fizzBuzz(17)).toBe(17)
    })
})
