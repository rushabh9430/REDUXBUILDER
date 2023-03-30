import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ShowTeam() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/team`,
    });
    setData(response.data);
  };

  //   const { id } = useParams();

  const onClickEdit = (id) => {
    Navigate(`/EditTeam/${id}`);
  };

  const onClickDelete = async (id) => {
    if (window.confirm(`are you sure want to delete ${id}`)) {
      await axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_BASE_URL}/team/${id}`,
      });
      getdata();

      toast.error("Team Deleted!");
    }
  };
  return (
    <div className="margin-150">
      <div className="container">
        <div className="row">
          {data?.map((i) => {
            return (
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={100}>
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social d-flex justify-content-between my-1">
                      <button
                        className="btn btn-danger"
                        onClick={() => onClickDelete(i?.id)}
                      >
                        DELETE
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={() => onClickEdit(i?.id)}
                      >
                        EDIT
                      </button>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{i.firstname}</h4>
                    <span>{i.lastName}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShowTeam;
