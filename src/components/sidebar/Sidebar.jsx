import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Reports
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Football</h3>
          <ul className="sidebarList">
            
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                JPL League Table
              </li>
           
           
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                TvT League Table
              </li>
            
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
                Transfers
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              GW Analysis
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">TvT</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Fixtures
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Chips Account
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}