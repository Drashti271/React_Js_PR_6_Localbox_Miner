const Add_employee = ({handleChange , handleSubmit , employee , hobby , error}) => {
  const cities = [
    "Surat",
    "Bilimora",
    "Valsad",
    "Navsari",
    "Ahemdabad",
    "Vadodara",
    "Mumbai"
  ];

  return (
    <div className="d-flex justify-content-center mt-3">
      <form action="" method="post" onSubmit={handleSubmit}>
        <h2>Add Employee</h2>
        <div className="mb-3">
          <label htmlFor="image">Profile</label>
          <input className="form-control" type="url" value={employee.image || ""} name="image" id="image" placeholder="Enter url here" onChange={handleChange} />
          <span className="text-danger">{error.image || ""}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="name">E Name</label>
          <input className="form-control" type="text" value={employee.name || ""} name="name" id="name" onChange={handleChange} />
          <span className="text-danger">{error.name || ""}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" value={employee.email || ""} name="email" id="email" onChange={handleChange} />
          <span className="text-danger">{error.email || ""}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input className="form-control" type="password" value={employee.password || ""} name="password" id="password" onChange={handleChange} />
          <span className="text-danger">{error.password || ""}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="gender">Gender</label>
          <div>
            <input type="radio" checked={employee.gender == "Male"} name="gender" id="gender1" value="Male" onChange={handleChange} />
            <label htmlFor="gender1">Male</label>
          </div>
          <div>
            <input type="radio" checked={employee.gender == "Female"} name="gender" id="gender2" value="Female" onChange={handleChange} />
            <label htmlFor="gender2">Female</label>
          </div>
          <span className="text-danger">{error.gender || ""}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="hobby">Hobby</label>
          <div className="mb-2">
            <input type="checkbox" checked={hobby?.includes('reading')} name="hobby" value="reading"  onChange={handleChange} />
            <label htmlFor="reading">Reading</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" checked={hobby?.includes('writing')} name="hobby" value="writing" onChange={handleChange} />
            <label htmlFor="writing">Writing</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" checked={hobby?.includes('coding')} name="hobby" value="coding" onChange={handleChange} />
            <label htmlFor="coding">Coding</label>
          </div>
          <span className="text-danger">{error.hobby || ""}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="city">City</label>
          <select name="city" className="form-control" id="city" value={employee.city || ""} onChange={handleChange}>
            <option value="" disabled>
              ---Select City---
            </option>
            {
              cities.map((city) => (
                <option value={city} selected={employee.city == city}>{city}</option>
              ))
            }
          </select>
          <span className="text-danger">{error.city || ""}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <textarea className="form-control" name="address" id="address" value={employee.address || ""} onChange={handleChange}></textarea>
          <span className="text-danger">{error.address || ""}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add_employee;
