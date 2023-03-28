import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Team() {
  const [firstname, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);

  const Navigate = useNavigate()
  const OnchangeName = (event) => {
    setFirstName(event.target.value);
  };
  const OnchangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const onclickHandler = async() => {
    const data = {
        firstname,
        lastName,
      };
      console.info("data" , data)

      const response = await axios({

       method : "POST",
       url : `${process.env.REACT_APP_BASE_URL}/team`,
       data : data

      })
      console.log("res" , response)

    
      toast.success('😁')

      Navigate('/showteam')
  }
  return (
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
                onChange={OnchangeName}
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Pofession"
                name="lastName"
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
  );
}

export default Team;
