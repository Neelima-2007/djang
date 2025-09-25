import React from "react";
import { datajson } from "./datajson"; 

const UsersList = () => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {datajson.map((user) => (
          <li key={user.id}>
            <p>name: {user.name}</p>
            <p>phone: {user.phone}</p>
            <p>Email: {user.email}</p>

            {/* <h4>Address:</h4>
            <p><strong>Street:</strong> {user.address.street}</p>
            <p><strong>Suite:</strong> {user.address.suite}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Zipcode:</strong> {user.address.zipcode}</p>

            <h4>Geo:</h4> 
            <p><strong>Lat:</strong> {user.address.geo.lat}</p>
            <p><strong> Lng:</strong> {user.address.geo.lng}</p>

            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>

            <h4>Company:</h4>
            <p><strong>Name:</strong> {user.company.name}</p>
            <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
            <p><strong>Business:</strong> {user.company.bs}</p> */}
            <hr />
            </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;