import React from 'react'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import data from '../constants/jpl'
import Blank from './Blank'

const JPL = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {
                data.widget.map((item, index) => (
                  <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                    <SummaryBox item={item} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-4 hide-md">
            <SummaryBoxSpecial item={data.rank} />
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
                <div className="title mb">Accolades</div>
                <div className="mb">
                    <jplaccolades />
                </div>
                <div className="title mb">Section to be annoced soon</div>
                <div className="mb">
                    <Blank />
                </div>
            </DashboardWrapperRight>

    </DashboardWrapper>
  )
}

export default JPL