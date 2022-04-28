const User = require('./../app/user')
describe("Unit Test for User class", () => {
    
    test('Create an User object', () => {
        const user = new User(1,'Lomosaurio','Mauricio','Bio','dateCreated', 'lastUpdated')
        
        expect(user.id).toBe(1)
        expect(user.username).toBe("Lomosaurio")
        expect(user.name).toBe("Mauricio")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdate).toBe("lastUpdated")
    })
})