import UserCard from './UserCard';
import React from "react";

let UserList = props => {
   return (
       <div>
           {props.userData.map(followers => {
               return (
               <UserCard key={followers.login} followers={followers} />
           )})}
       </div>
   );
}
export default UserList;