describe("password_is_valid", () => {
   
    it("should check if password is longer than 8 characters", () => {
      expect(() => {password_is_valid("QLjghH2")}).toThrow(new Error("password should be larger than 8 characters"));
    });

    it("should check if password is not null", () => {
        expect(() => {password_is_valid("")}).toThrow(new Error("password should not be null"));
    });

    it("should check password has atleast 1 number", () => {
        expect(() => {password_is_valid("jhjkDS")}).toThrow(new Error("password should have at least one number"));
    })

    it("should check if password has atleast 1 uppercase letter", () => {
        expect(() => {password_is_valid("sjhdh")}).toThrow(new Error("password must have atleast 1 uppercase letter"));
    })

    it("should check if password has atleast 1 lowercase", () => {
        expect(() => {password_is_valid("4585")}).toThrow(new Error("password should have at least one lowercase letter"));
    })
        
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

    it('should check if password has more than 8 characters and is not null', function(){
        expect(password_is_ok("12345ABcde")).toBe(true);
    })
});

