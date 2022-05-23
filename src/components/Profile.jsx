import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../style/profile.css";

function Profile() {
  const data = JSON.parse(window.localStorage.getItem("register"));
  const [modalUp, setModalUp] = useState(false);

  const navigate = useNavigate();

  const [dataRegister, setDataRegister] = useState({
    name: "",
    gender: "",
    email: "",
  });

  const handleChange = (e) => {
    setDataRegister({
      ...dataRegister,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    window.localStorage.setItem(JSON.stringify("register", dataRegister));
    setModalUp(false);
  };

  const clickDelete = () => {
    window.localStorage.removeItem("register");
    window.localStorage.removeItem("password");
    window.localStorage.removeItem("isLogin");
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-md-1">
            <div className="pembungkus-image">
              <img
                src="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=20&m=1226886130&s=170667a&w=0&h=jMvDQqfHSx2PEdvvRtSNX6FVXPK-_WZ1UzBRToBHv4g="
                alt=""
              />
            </div>
          </div>
          <div className="col-md-5 table-content">
            <table className="table-profile">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>: {data.name}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>: {data.gender}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>: {data.email}</td>
                </tr>
              </tbody>
            </table>
            <div className="tombol">
              <button className="text-danger" onClick={() => setModalUp(true)}>
                Update
              </button>
              <button className="bg-danger" onClick={clickDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="div-modal">
        {modalUp ? (
          <Modal.Dialog>
            <Modal.Header closeButton onClick={() => setModalUp(false)}>
              <Modal.Title>Update User</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <form className="modal-profile">
                <div>
                  <label>Name :</label>
                  <input
                    type="text"
                    placeholder="Input Your Name"
                    name="name"
                    value={dataRegister.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Gender :</label>
                  <input
                    type="text"
                    placeholder="Input Your Gender"
                    name="gender"
                    value={dataRegister.gender}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Email :</label>
                  <input
                    type="text"
                    placeholder="Input Your Email"
                    name="email"
                    value={dataRegister.email}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setModalUp(false)}>
                Close
              </Button>
              <Button variant="danger" onClick={handleClick}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        ) : (
          <div className="d-none"></div>
        )}
      </div>
    </div>
  );
}

export default Profile;
