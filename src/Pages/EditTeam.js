import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditTeam() {
  const [firstname, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  const OnchangeName = (event) => {
    setFirstName(event.target.value);
  };
  const OnchangeLastName = (event) => {
    setLastName(event.target.value);
  };

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/team/${id}`,
    });
    setFirstName(res.data.firstname)
    setLastName(res.data.lastName)

  };

  const onclickHandler = async () => {
    const data = {
      firstname,
      lastName,
    };

    await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BASE_URL}/team/${id}`,
      data : data
    });

    toast.success('Updated !')
    navigate('/showteam')
  };

  

  return (
    <div>
      {" "}
      <div>
        {/* ======= Team Section ======= */}
        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Team</h2>
              <p>Check our Team</p>
            </div>

            <div className="team_section">
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="firstname"
                  value={firstname}
                  onChange={OnchangeName}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Pofession"
                  name="lastName"
                  value={lastName}
                  onChange={OnchangeLastName}
                />
                <br />
                <button
                  type="button"
                  onClick={onclickHandler}
                  className="btn btn-warning"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Section */}
      </div>
    </div>
  );
}

export default EditTeam;
