// models/user.js
 
/**
 * @typedef User
 * @property {integer} id
 * @property {string} login.required - unique username
 * @property {string} fullname - users full name
 * @property {string} role - 1 - adimn, 0 - casual user
 * @property {string} registeredAt - data of registration
 * @property {string} avaUrl - avatar`s URL
 * @property {string} isEnabled - enabled or disabled account
 */

class User {

    constructor(id, login, fullname, role, registeredAt, avaUrl, isEnabled) {
        this.id = id;  // number
        this.login = login;  // string
        this.fullname = fullname;  // string
        this.role = role;
        this.registeredAt = registeredAt;
        this.avaUrl = avaUrl;
        this.isEnabled = isEnabled;
    }
 };
 
 module.exports = User;