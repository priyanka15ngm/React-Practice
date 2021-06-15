import "./Table.css";

import React from "react";



const Table = () => {
  const initialList = [
    {
      username: "priyanka",

      password: "123456789",

      email: "priyanka.nigam_cs18@gla.ac.in",
    },
  ];

  const [list, setList] = React.useState(initialList);

  const [name, setName] = React.useState("");

  const [pass, setPass] = React.useState("");

  const [email, setEmail] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleChange1(event) {
    setPass(event.target.value);
  }

  function handleChange2(event) {
    setEmail(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({
      password: pass,
      username: name,
      email: email,
    });

    setList(newList);

    setName("");

    setPass("");

    setEmail("");
  }

  return (
    <div className="App">
      <div>
        <div className="label">React Dynamic Table</div>

        <div className="input">
          <label>Name</label>

          <input type="text" value={name} onChange={handleChange} />

          <label>Password</label>

          <input type="password" value={pass} onChange={handleChange1} />

          <label>Email</label>

          <input type="email" value={email} onChange={handleChange2} />

          <button type="button" onClick={handleAdd}>
            Add User
          </button>
        </div>
      </div>

      <table className="add">
        <tr>
          <th>SNo</th>

          <th>Username</th>

          <th>Password</th>

          <th>Email ID</th>
        </tr>

        {list.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>

            <td>{item.username}</td>

            <td>{item.password}</td>

            <td>{item.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;

