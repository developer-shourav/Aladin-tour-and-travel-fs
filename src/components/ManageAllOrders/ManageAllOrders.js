import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageAllOrders = () => {
  const email = sessionStorage.getItem("email");
  const [orders, setOrders] = useState([]);
  const [constrol, setControl] = useState(false);
  const [status, setStatus] = useState(" ");

  const handleStatous = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://aladin-tour-and-travels-backend.vercel.app/myOrders/${email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [constrol]);

  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure, you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
            `https://aladin-tour-and-travels-backend.vercel.app/deleteOrder/${id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                setControl(!constrol);
                Swal.fire("Deleted!", "Your order has been deleted.", "success");
              }
            });
       
      }
    });
  };

  const handleUpdate = (id) => {
    fetch(
      `https://aladin-tour-and-travels-backend.vercel.app/updateStatus/${id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
      }
    );
  };

  return (
    <div>
      <h1 className="text-center mt-4">Total Orders: {orders.length} </h1>
      <h1 className="text-center mt-0 ">--------------------- </h1>

      <div>
        <p className="container fw-bold">Orders of: {email} </p>
        <div className="my-4">
          <div>
            {orders.map((order) => (
              <div key={order?._id}>
                <div className="container">
                  <div className="">
                    <div className="">
                      <div className="border border-3 border-warning p-3 mb-4">
                        <div className="row">
                          <div className="col-lg-8 d-flex align-items-center">
                            <div className="img">
                              <img
                                className=""
                                width="150"
                                src={order?.imageLink}
                                alt=""
                              />
                            </div>

                            <div className="d-flex justify-content-between align-items-center ms-3">
                              <div className="a">
                                <h4 className="m-0">
                                  Package: {order?.packageName}
                                </h4>
                                <p className="mt-2 mb-2 fs-5">
                                  Class:{order?.model}
                                </p>
                                <p className="m-0">
                                  Order Status :
                                  <select
                                    className=" py-1 px-2 "
                                    onChange={handleStatous}
                                    defaultValue={order?.status}
                                    type="text"
                                    required
                                  >
                                    <option
                                      className="text-danger"
                                      value="pending"
                                      disabled
                                    >
                                      Pending
                                    </option>
                                    <option
                                      className="text-success"
                                      value="Approved"
                                    >
                                      Approved
                                    </option>
                                  </select>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-4 d-flex align-items-center">
                            <div className="ms-5 mt-4 mt-lg-0">
                              <button
                                onClick={() => handleUpdate(order?._id)}
                                className="btn btn-success ms-4"
                              >
                                Approve Order
                              </button>

                              <button
                                onClick={() => handleDelete(order?._id)}
                                className="btn btn-danger ms-4 mt-3"
                              >
                                <i
                                  className="fas fa-trash"
                                  aria-hidden="true"
                                ></i>{" "}
                                Delete Order
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
