"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
var userInfo_1 = require("./userInfo");
function getUsersJobPositions(users) {
    var newArray;
    users.forEach(function (newuser) {
        var userinfo_2 = userInfo_1.usersInfoArray === null || userInfo_1.usersInfoArray === void 0 ? void 0 : userInfo_1.usersInfoArray.find(function (item) { return item.userid == newuser.userid; });
        if (userinfo_2 != undefined && userinfo_2.organization != undefined) {
            var NewObj = {
                age: userinfo_2.age,
                gender: newuser.gender,
                name: newuser.name,
                position: userinfo_2.organization.position,
            };
            newArray.push(NewObj);
        }
    });
    return newArray;
}
var usersPositions = getUsersJobPositions(users_1.usersArray);
console.log('userPositions', usersPositions);
