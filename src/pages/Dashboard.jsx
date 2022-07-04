import React from 'react'
import statusCards from '../assets/JsonData/status-card-data.json'
import Chart from 'react-apexcharts'
import StatusCard from '../components/status-card/StatusCard'
import Table from '../components/table/Table'
import { Link } from 'react-router-dom'
import Badge from '../components/badge/Badge'
import { useSelector } from 'react-redux'
import {stats,leagueStandings} from './data/leaguedata'
import awards from './data/awards'
const orderStatus = {
    "567": "primary",
    "294": "warning",
    "190": "success",
    "99": "danger"
}


const renderAwardsHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderAwardsBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.awarddesc}</td>
        <td>{item.award}</td>
    </tr>
)

const renderLeagueStandingHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderLeagueStadningBody = (item, index) => (
    <tr key={index}>
        <td>{item.teamname}</td>
        <td>{item.managername}</td>
        <td>{item.totpoints}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.gwpoints]} content={item.gwpoints} />
        </td>
    </tr>
)



const Dashboard = () => {
    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="widget full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...stats.options,
                                theme: { mode: 'dark' }
                            } : {
                                ...stats.options,
                                theme: { mode: 'light' }
                            }}
                            series={stats.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="widget">
                        <div className="widget__header">
                            <h3>Awards</h3>
                        </div>
                        <div className="widget__body">
                            <Table
                                headData={awards.head}
                                renderHead={(item, index) => renderAwardsHead(item, index)}
                                bodyData={awards.body}
                                renderBody={(item, index) => renderAwardsBody(item, index)}
                            />
                        </div>
                        <div className="widget__view__all__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
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

export default Dashboard
