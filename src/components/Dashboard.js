import React, { useEffect, useState } from "react";
import data from "../data.json";
import work from "../images/icon-work.svg";
import play from "../images/icon-play.svg";
import exercise from "../images/icon-exercise.svg";
import selfCare from "../images/icon-self-care.svg";
import social from "../images/icon-social.svg";
import study from "../images/icon-study.svg";
import jeremy from "../images/image-jeremy.png";

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState("weekly");
  useEffect(() => {
  }, [timeFrame]);
  return (
    <main className="container">
      <div className="item item-1">
        <div className="outer">
          <div className="profile">
            <div className="upper__div">
              <img src={jeremy} alt="profile" />
            </div>
            <div className="profile__info">
              <div className="small__text">Report for</div>
              <div className="lg__text">Jeremy Robson</div>
            </div>
          </div>
          <div className="list">
            <div className="list_items">
              <div className="list_item1" onClick={(e) => setTimeFrame(e.target.textContent)}>
                <button className="link" style={{ color: timeFrame.toLowerCase() === "daily" ? "whitesmoke" : ""}} >
                  Daily
                </button>
              </div>
              <div className="list_item2" onClick={(e) => setTimeFrame(e.target.textContent)}>
                <button className="link2" style={{ color: timeFrame.toLowerCase() === "weekly" ? "whitesmoke" : "" }}>
                  Weekly
                </button>
              </div>
              <div className="list_item3" onClick={(e) => setTimeFrame(e.target.textContent)}>
                <button className="link" style={{ color:timeFrame.toLowerCase() === "monthly" ? "whitesmoke" : ""}}>
                  Monthly
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data.map((d) => (
        <div
          className="item item-2"
          key={d.title}
          style={{ backgroundColor: `${d.color}` }}
        >
          {d.title === "Work" && <img src={work} className="icon" alt="icon" />}
          {d.title === "Play" && <img src={play} className="icon" alt="icon" />}
          {d.title === "Study" && (
            <img src={study} className="icon" alt="icon" />
          )}
          {d.title === "Exercise" && (
            <img src={exercise} className="icon" alt="icon" />
          )}
          {d.title === "Social" && (
            <img src={social} className="icon" alt="icon" />
          )}
          {d.title === "Self Care" && (
            <img src={selfCare} className="icon" alt="icon" />
          )}

          <div className="sub-div">
            <div className="header">
              <div className="title">{d.title}</div>
              <div className="icon">
                <svg
                  width="21"
                  className="info__icon"
                  height="5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    // fill="#BBC0FF"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="content">
              <div className="current">
                {timeFrame.toLowerCase() === "weekly"
                  ? d.timeframes.weekly.current
                  : timeFrame.toLowerCase() === "daily"
                  ? d.timeframes.daily.current
                  : timeFrame.toLowerCase() === "monthly"
                  ? d.timeframes.monthly.current
                  : ""}
                hrs
              </div>
              <div className="last_week">
                Last Week -{" "}
                {timeFrame.toLowerCase() === "weekly"
                  ? d.timeframes.weekly.previous
                  : timeFrame.toLowerCase() === "daily"
                  ? d.timeframes.daily.previous
                  : timeFrame.toLowerCase() === "monthly"
                  ? d.timeframes.monthly.previous
                  : ""}
                hrs
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Dashboard;
