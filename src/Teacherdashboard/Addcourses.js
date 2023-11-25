import React, { useState } from "react";
import "../Style.css";
import bannerImage from "../image3.jpeg";

const Courses = () => {
  const [userRegistration, setUserRegistration] = useState({
    coursename: " ",
    addvideo: " ",
    description: "  ",
    notes: " ",
    fileUpload: " ",
  });
  const [records, setRecord] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };

    setRecord([...records, newRecord]);

    setUserRegistration({
      coursename: " ",
      addvideo: " ",
      description: " ",
      notes: " ",
      fileUpload: " ",
    });
    setSelectedFile(null);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="container">
          <div className="parent-container">
            <div className="parent">
              <h1>Add Your Course</h1>
              <div className="input-container">
                <label htmlFor="coursename"> Course Name</label>
                <input
                  type="text"
                  autoComplete="off "
                  value={userRegistration.coursename}
                  onChange={handleInput}
                  name="coursename"
                  id="coursename"
                />
              </div>

              <div className="input-container">
                <label htmlFor="addvideo"> Add Video Title </label>
                <input
                  type="text"
                  autoComplete="off "
                  value={userRegistration.addvideo}
                  onChange={handleInput}
                  name="addvideo"
                  id="addvideo"
                />
              </div>

              <div className="input-container">
                <label htmlFor="description"> Description </label>
                <input
                  type="text"
                  autoComplete="off "
                  value={userRegistration.description}
                  onChange={handleInput}
                  name="description"
                  id="description"
                />
              </div>

              <div className="input-container">
                <label htmlFor="notes"> Notes </label>
                <input
                  type="text"
                  autoComplete="off "
                  value={userRegistration.notes}
                  onChange={handleInput}
                  name="notes"
                  id="notes"
                />
              </div>
              <div className="input-container">
                <label htmlFor="fileUpload">Upload File</label>
                <input
                  type="file"
                  id="fileUpload"
                  name="fileUpload"
                  onChange={handleFileInput}
                />
              </div>

              <button type="submit"> Submit</button>
            </div>
          </div>
          <div className="banner-img">
            <img src={bannerImage} alt="" />
          </div>
        </div>
      </form>
      <div>
        {records.map((curElem) => {
          return (
            <div className="output-table">
              <p>{curElem.coursename}</p>
              <p>{curElem.addvideo}</p>
              <p>{curElem.description}</p>
              <p>{curElem.notes}</p>
              <p>{curElem.uploadedFile}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
