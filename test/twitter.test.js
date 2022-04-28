const User = require('./../app/user')
describe("Unit Test for User class", () => {
    
    test('Create an User object', () => {
        const user = new User(1,'Lomosaurio','Mauricio','Bio')
        
        expect(user.id).toBe(1)
        expect(user.username).toBe("Lomosaurio")
        expect(user.name).toBe("Mauricio")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    })

})