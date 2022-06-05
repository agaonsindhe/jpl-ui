import React from 'react'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox from '../components/summary-box/SummaryBox'
import { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import Box from '../components/box/Box'
import {  data } from '../constants'
import Blank from './Blank'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import OverallList from '../components/overall-list/OverallList'
import RevenueList from '../components/revenue-list/RevenueList'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)


const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {
                data.summary.map((item, index) => (
                  <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                    <SummaryBox item={item} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-4 hide-md">
            <SummaryBoxSpecial item={data.revenueSummary} />
          </div>
        </div>
        <div className="row">
                    <div className="col-12">
                        <Box>
                            <Blank />
                        </Box>
                    </div>
                </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
                <div className="title mb">Overall</div>
                <div className="mb">
                    <OverallList />
                </div>
                <div className="title mb">Section to be annoced soon</div>
                <div className="mb">
                    <Blank />
                </div>
            </DashboardWrapperRight>

    </DashboardWrapper>
  )
}

export default Dashboard


