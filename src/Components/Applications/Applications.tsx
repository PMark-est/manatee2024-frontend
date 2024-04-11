import { useEffect, useRef, useState } from "react";
import { ApplicationApi } from "../../generated/index";
import ApplicationRow from "../Application/ApplicationRow";
import { ApplicationData } from "../Application/ApplicationRow";

import "./Applications.css";

const Applications = () => {
  const [applications, setApplications] = useState<ApplicationData[]>([]);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [atEnd, setAtEnd] = useState(true);
  const applicationsList = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const position = applicationsList.current?.scrollTop;
      if (position === 0) {
        applicationsList.current!.style.maskImage =
          "linear-gradient(180deg, #000 80%,transparent)";
        setAtEnd(true);
      } else if (position === scrollHeight) {
        applicationsList.current!.style.maskImage =
          "linear-gradient(180deg,transparent 0%, #000 20%)";
        setAtEnd(true);
      } else {
        if (atEnd) {
          applicationsList.current!.style.maskImage =
            "linear-gradient(180deg,transparent 0%, #000 20%, #000 20%, #000 80%, transparent)";
        }
        setAtEnd(false);
      }
    };
    setTimeout(() => {
      setScrollHeight(
        applicationsList.current?.scrollHeight! -
          applicationsList.current?.clientHeight!
      );
    }, 100);
    applicationsList.current?.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    let id = 0;
    const fetchApplicants = async () => {
      const applicationApi = new ApplicationApi();
      const applications = await applicationApi.getApplications();
      const items: Array<ApplicationData> = [];
      applications.forEach(async (application) => {
        const applicationsList: ApplicationData[] = await ApplicationRow(
          application,
          id++
        );
        applicationsList.forEach((app) => {
          items.push(app);
        });
      });
      setApplications(items);
    };

    fetchApplicants();

    return () => {
      applicationsList.current?.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHeight, atEnd]);
  return (
    <main>
      <div className="Header">
        <span>Candidate name</span>
        <span>Application state</span>
        <span>Interview type</span>
        <span>Interviewer name</span>
        <span>Interview time</span>
      </div>
      <div className="ApplicationsWrapper">
        <div ref={applicationsList} className="Applications">
          {applications.map((app) => (
            <div key={app.id} className="row">
              <span className="cell">{app.candidateName}</span>
              <span className="cell">{app.applicationState}</span>
              <span className="cell">{app.interviewType}</span>
              <span className="cell">{app.interviewerName}</span>
              <span className="cell">{app.interviewTime}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Applications;
