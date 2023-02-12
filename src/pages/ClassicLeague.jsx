import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '../components/badge/Badge'
import Table from '../components/table/Table'
import { leagueStandings } from './data/leaguedata'

const orderStatus = {
    "567": "primary",
    "294": "warning",
    "190": "success",
    "99": "danger"
}


const renderLeagueStandingHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderLeagueStadningBody = (item, index) => (
    <tr key={index}>
        <td>{item.teamname}</td>
        <td>{item.managername}</td>
        <td>{item.date}</td>
        <td>{item.totpoints}</td>
        <td>{item.gwpoints}</td>
        
        {/* <td>
            <Badge type={orderStatus[item.status]} content={item.status} />
        </td> */}
    </tr>
)
const ClassicLeague = () => {
    return (
        <div>
            <h2 className="page-header">JPL Season 5 - Classic League</h2>
            <div className="row">
            <div className="col-12">
                    <div className="widget">
                        <div className="widget__header">
                            <h3>JPL Season 5 Standings</h3>
                        </div>
                        <div className="widget__body">
                            <Table
                                headData={leagueStandings.header}
                                renderHead={(item, index) => renderLeagueStandingHead(item, index)}
                                bodyData={leagueStandings.body}
                                renderBody={(item, index) => renderLeagueStadningBody(item, index)}
                            />
                        </div>
                        <div className="widget__view__all__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassicLeague;