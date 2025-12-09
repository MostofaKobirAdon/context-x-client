import React from "react";

const ParticipatedContests = () => {
  return (
    <div className="bg-base-200 rounded-xl min-h-[85vh] p-3">
      <h1 className="section-heading text-center">
        My Participated <span className="font-bold text-primary">Contests</span>
      </h1>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead className="">
            <tr>
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>Contest Type</th>
              <th>Deadline</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="">
              <td>1</td>
              <td>
                {" "}
                <div className="">
                  <div className=" h-20 rounded-lg object-cover overflow-hidden w-23">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold text-lg">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>Design</td>
              <td>
                <div className="font-bold text-md">7-1-2026</div>
              </td>
              <th>
                <div className="badge badge-soft badge-primary">Paid</div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipatedContests;
