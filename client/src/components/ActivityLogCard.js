import React from "react";
import monitor from "../images/monitor.png";
import playlist from "../images/playlist.png";
import command from "../images/commandLine.png";
const ActivityLogCard = () => {
  return (
    <div className="lg-shadow w-96 h-64 bg-white mr-5 mb-2">
      <p className="font-semibold pl-5 pt-3">Activity Logs</p>


      <table>
        <tr>
          <td>
            <img src={monitor} className="w-6 h-6 ml-4" />
          </td>
          <td>
            <p className="ml-3 text-md">
              Chanels
              <span className="text-xs">
                <p>FutureIK-device1 report generated successfully</p>
              </span>
            </p>
          </td>
          <td>
            <p className=" ml-2 text-xs text-gray-300">
              16Mar 2023,
              <span>
                {" "}
                <p>06:30:25 PM</p>
              </span>
            </p>
          </td>
        </tr>
        <td colspan="3">
        <hr className="border-gray-500 w-full"/>
        </td>
    

        <tr>
          <td>
            <img src={command} className="w-6 h-6 ml-4 -mt-6" />
          </td>
          <td>
            <p className="-mt-2 ml-3 text-md">
              Campaignal
              <span className="text-xs">
                <p>FutureIK-device1 report generated successfully</p>
              </span>
            </p>
          </td>
          <td>
            <p className="-mt-2 ml-2 text-gray-300">
              16Mar 2023,
              <span>
                {" "}
                <p>06:30:25 PM</p>
              </span>
            </p>
          </td>
        </tr>
        <hr className="pt-3"/>
        <tr>
          <td colspan="3 ">
            <hr class="border-gray-500 w-full -mt-2" />
          </td>
        </tr>

        <tr>
          <td>
            <img src={playlist} className="w-6 h-6 ml-4 -mt-6" />
          </td>
          <td>
            <p className="-mt-2 ml-3 text-lg">
              Dashboarded
              <span className="text-xs ">
                <p>FutureIK-Display 1 created successfully</p>
              </span>
            </p>
          </td>
          <td>
            <p className="-mt-2 ml-2 text-gray-300">
              16Mar 2023,
              <span>
                {" "}
                <p>06:30:25 PM</p>
              </span>
            </p>
          </td>
        </tr>

        <hr className="pt-3"/>
      </table>
    </div>
  );
};

export default ActivityLogCard;
