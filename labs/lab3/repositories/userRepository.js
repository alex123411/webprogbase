// repositories/userRepository.js
const User = require('../models/user');
const JsonStorage = require('../jsonStorage');
 
class UserRepository {
 
    constructor(filePath) {
        this.storage = new JsonStorage(filePath);
    }

 
    getUsers() { 
        const items = this.storage.readItems();
        return items; 
    }
 
    getUserById(id) {
        console.log(id);
        const items = this.storage.readItems();
        for (const item of items) {
            if (item.id === id) {
                return new User(item.id, item.login, item.fullname, item.role,item.registeredAt, item.avaUrl, item.isEnabled);
            }
        }
        return null;
    }

 
    addUser(userModel) {
        throw new Error("Not implemented"); 
    }
 
    updateUser(userModel) {
        throw new Error("Not implemented"); 
    }
 
    deleteUser(userId) {
        throw new Error("Not implemented"); 
    }
};
 
module.exports = UserRepository;
