
describe("password_is_valid", function(){

    it ("should have more than 8 characters", function(){
        expect(password_is_valid("12345ABcde")).toBe(true);
    });

    it ("should not be null", function(){
        expect(password_is_valid("ABcde12345")).toBe(true);
    });

    it ("should have at least one uppercase letter", function(){
        expect(password_is_valid("123sjkabBcde")).toBe(true);
    });

    it ("should have at least one lowercase letter", function(){
        expect(password_is_valid("sdfjhSJHG48")).toBe(true);
    });


    it ("should have at least one number", function(){
        expect(password_is_valid("KJFD89uiljk")).toBe(true);
    });

    it ("should have at least one number", function(){
        expect(password_is_valid("zxcABcde")).toBe(false);
    });
});




describe("password_is_ok", function(){

    it ("should have more than 8 characters", function(){
        expect(password_is_ok("ljk95487JHJ")).toBe(true);
    });

    it ("should not be null", function(){
        expect(password_is_ok("KJK5898fkl")).toBe(true);
    });

    it ("should have at least one uppercase letter", function(){
        expect(password_is_ok(",kjfdk4879JH")).toBe(true);
    });

    it ("should have at least one lowercase letter", function(){
        expect(password_is_ok("KJL9548912jkj")).toBe(true);
    });


    it ("should have at least one number", function(){
        expect(password_is_ok("43678bjhdfjnHJ")).toBe(true);
    });

    
});


describe("neverOk(password)", function(){

    it ("should have more than 8 characters", function(){
        expect(neverOk("12345ABcde")).toBe(false);
    });

});