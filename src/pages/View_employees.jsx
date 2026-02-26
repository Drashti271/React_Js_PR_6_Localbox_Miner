import React, { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const View_employees = ({ list , handleDelete , handleEdit }) => {
  const [view , setView] = useState({});

  const handleViewPass = (id) => {
    if(view.id){
      setView({});
    } else {
      setView({id});
    }
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center d-flex mt-5">
          <div className="col-md-10">
            <h2>Employee Details</h2>
            <table
              border="1"
              className="table-bordered table-striped table table-hover"
              cellPadding="10"
            >
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Profile Image</th>
                  <th>E Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Gender</th>
                  <th>Hobby</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {list.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>

                      <td>
                        <img src={item.image} alt={item.name} width="50" height="50" />
                      </td>

                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        <div className="d-flex">
                          <input className="form-control bg-transparent border-0" value={item.password} type={view.id == item.id ? "text" : "password"} readOnly />
                          <button  onClick={() => handleViewPass(item.id)} className="btn">{view.id === item.id ? <IoIosEye /> : <IoIosEyeOff /> }</button>
                        </div>
                      </td>
                      <td>{item.gender}</td>
                      <td>{item.hobby?.join(', ')}</td>
                      <td>{item.city}</td>
                      <td>{item.address}</td>

                      <td>
                        <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                        <button className="btn btn-warning" onClick={() => handleEdit(item.id)}>Edit</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default View_employees;
