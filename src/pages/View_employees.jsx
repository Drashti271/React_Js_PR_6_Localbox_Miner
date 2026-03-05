import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const View_employees = ({ list, handleDelete, handleEdit }) => {
  const [view, setView] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const dataCount = 5;
  const lastIndex = currentPage * dataCount;
  const firstIndex = lastIndex - dataCount;
  const totalPages = Math.ceil(list.length / dataCount);

  const data = list.slice(firstIndex, lastIndex);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleViewPass = (id) => {
    if (view.id) {
      setView({});
    } else {
      setView({ id });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [list]);

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
                {data.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>

                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          width="50"
                          height="50"
                        />
                      </td>

                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        <div className="d-flex">
                          <input
                            className="form-control bg-transparent border-0"
                            value={item.password}
                            type={view.id == item.id ? "text" : "password"}
                            readOnly
                          />
                          <button
                            onClick={() => handleViewPass(item.id)}
                            className="btn"
                          >
                            {view.id === item.id ? (
                              <IoIosEye />
                            ) : (
                              <IoIosEyeOff />
                            )}
                          </button>
                        </div>
                      </td>
                      <td>{item.gender}</td>
                      <td>{item.hobby?.join(", ")}</td>
                      <td>{item.city}</td>
                      <td>{item.address}</td>

                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => handleEdit(item.id)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-end position-fixed bottom-0 end-0 me-5">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link
                      className="page-link"
                      to="#"
                      onClick={handlePrevious}
                    >
                      Previous
                    </Link>
                  </li>
                  {[...Array(totalPages)].map((_, index) => {
                    return (
                      <li className="page-item" key={index}>
                        <Link
                          className={`page-link ${currentPage === index + 1 ? "bg-success-subtle" : ""}`}
                          to="#"
                          onClick={() => setCurrentPage(index + 1)}
                        >
                          {index + 1}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="page-item">
                    <Link className="page-link" to="#" onClick={handleNext}>
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View_employees;
