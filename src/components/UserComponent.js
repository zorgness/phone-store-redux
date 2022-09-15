import React from 'react'

const users = [
  { firstName: 'Joe', lastName: 'Alol', email: 'joe@example.com' },
  { firstName: 'Denis', lastName: 'ZonderDoi', email: 'zenis@example.com'},
  { firstName: 'Anne',  lastName: 'Denise', email: 'anne@example.com'}
]

const sortUsers = users.sort((a, b) => a.lastName.localeCompare(b.lastName))


const UserComponent = () => {
  return (
    <div>
      <ul>
      {
         sortUsers.map((user, index)=> {
          return (

            <li key={index + 1}>{user.firstName} {user.lastName}</li>
        )})
      }
       </ul>
    </div>
  )
}

export default UserComponent
