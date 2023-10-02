import React, { useState } from "react";

function ListUser() {

  const [input,setInput]=useState({});

  const handleChange = (e) =>{
    console.log(e.target.value)
    const name= e.target.name;
    const value= e.target.value;
    setInput(values=>({...values,[name]:value}));
  }

  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(input)
  }
  return (
    <div>
      <h1>List User</h1>
      <form action="post" onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <input type="text" name="email" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <input type="text" name="password" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>Mobile</th>
              <td>
                <input type="text" name="mobile" onChange={handleChange}/>
              </td>
            </tr>
            <tr>

              <th>Status</th>
              <td>
                <select name="status" id="status" onChange={handleChange}>
                  <option value="active" key="active" selected>
                    Active
                  </option>
                  <option value="deactive" key="deactive">
                    Deactive
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="submit" name="submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ListUser;
