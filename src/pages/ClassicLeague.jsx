import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/table/Table";
// import { leagueStandings } from "./data/leaguedata";

const orderStatus = {
  567: "primary",
  294: "warning",
  190: "success",
  99: "danger",
};

const renderLeagueStandingHead = (item, index) => <th key={index}>{item}</th>;

const renderLeagueStandingBody = (item,index) => (
  <tr key={index}>
    <td>{item.rank}</td>
    <td>{item.teamName}</td>
    <td>{item.managerName}</td>
    <td>{item.totalPoints}</td>
    <td>{item.currentGameWeekPts}</td>

    {/* <td>
            <Badge type={orderStatus[item.status]} content={item.status} />
        </td> */}
  </tr>
);

const ClassicLeague = () => {
  const fetchStandings = async() => {
    try {
      const res = await fetch("http://localhost:8080/api/v1/jpl-standings");
      const data = await res.json();
      setResult(arr => [...arr, ...data.jplStandings]);
      console.log(data.jplStandings);
    } catch (e) {
      console.error(e);
    }
  };

  const [result, setResult] = useState([]);
  const [header, setHeader] = useState([
    "Rank",
    "Team Name",
    "Manager Name",
    "Total Points",
    "GW Points",
  ]);

  useEffect(() => {
    fetchStandings();
  }, []);

  useEffect(() => {
    console.log(result)
  },[result])

  return (
    <div>
      <h2 className="page-header">JPL Season 6 - Classic League</h2>
      <div className="row">
        <div className="col-12">
          <div className="widget">
            <div className="widget__header">
              <h3>JPL Season 6 Standings</h3>
            </div>
            <div className="widget__body">
              <Table
                headData={header}
                renderHead={(item, index) =>
                  renderLeagueStandingHead(item, index)
                }

                bodyData={result}
                renderBody={(item,index) =>
                  renderLeagueStandingBody(item,index)

                }
                limit={50}
              />
            </div>
            <div className="widget__view__all__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicLeague;
