import {User, usersArray} from './users';
import { usersInfoArray } from './userInfo';

interface Obj {
  name: string,
  gender: string,
  age: number,
  position: string
}

function getUsersJobPositions(users: User[]): Obj[] {
  const newArray: Obj [] = [];
  users.forEach(newuser => {
    let userinfo_2 = usersInfoArray?.find(item => item.userid == newuser.userid);
    if (userinfo_2 != undefined && userinfo_2.organization != undefined) {
      let NewObj: Obj = {
        age: userinfo_2.age,
        gender: newuser.gender,
        name: newuser.name,
        position: userinfo_2.organization.position,
      };
      newArray.push(NewObj);
    }
  })
  return newArray;
}
const usersPositions = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions)








