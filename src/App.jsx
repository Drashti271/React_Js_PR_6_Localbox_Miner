import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Add_employee from "./pages/Add_employee";
import View_employees from "./pages/View_employees";
import Header from "./components/Header";

const App = () => {
  const [employee, setEmployee] = useState({});
  const [list, setList] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [error, setError] = useState({});
  const [editId, setEditId] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value, checked } = e.target;
    let newHobby = [...hobby];

    if (name == "hobby") {
      if (checked) {
        newHobby = [...hobby, value];
      } else {
        newHobby = newHobby.filter((item) => item !== value);
      }
      setHobby(newHobby);
      value = newHobby;
    }
    setEmployee({ ...employee, [name]: value });
  };

  const validation = () => {
    let error = {};

    if (!employee.image) error.image = "Please Enter Your Profile Image Url";
    if (!employee.name) error.name = "Please Enter Employee Name";
    if (!employee.email) error.email = "Please Enter Your Email";
    if (!employee.password) error.password = "Please Enter Your Password";
    if (!employee.gender) error.gender = "Please Select Your Gender";
    if (!hobby || hobby.length === 0) error.hobby = "Please Select Your Hobby";
    if (!employee.city) error.city = "Please Select Your City";
    if (!employee.address) error.address = "Please Enter Your Address";

    setError(error);
    return Object.keys(error).length === 0;
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filtered = list.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchData(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validation()) return;

    if (editId) {
      const updatedList = list.map((item) =>
        item.id === editId ? { ...employee, id: editId } : item,
      );

      setList(updatedList);
      localStorage.setItem("employeeList", JSON.stringify(updatedList));
      setEditId(null);
      navigate("/view_employees"); 
    } else {
      const newList = [...list, { id: Date.now(), ...employee }];
      setList(newList);
      localStorage.setItem("employeeList", JSON.stringify(newList));
      navigate("/view_employees");
    }

    setEmployee({});
    setHobby([]);
  };

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem("employeeList") || "[]");
    setList(oldList);
  }, []);

  const handleDelete = (id) => {
    let newList = list.filter(item => item.id !== id);
    setList(newList);
    localStorage.setItem("employeeList", JSON.stringify(newList));
  };

  const handleEdit = (id) => {
    const data = list.find(item => item.id === id);
    setEmployee(data);
    setHobby(data.hobby || []);
    setEditId(id);
    navigate("/add_employee"); 
  };

  return (
    <>
      <Header onChange={handleSearch} />
      <Routes>
        <Route path="/" element={null} />
        <Route
          path="/add_employee"
          element={
            <Add_employee
              handleChange={handleChange}
              employee={employee}
              handleSubmit={handleSubmit}
              hobby={hobby}
              error={error}
            />
          }
        />
        <Route
          path="/view_employees"
          element={
            <View_employees
              list={searchText ? searchData : list}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
