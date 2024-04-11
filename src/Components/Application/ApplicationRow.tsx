import {
  ApplicationState,
  InterviewType,
  Application,
  Interview,
} from "../../generated/index";

export interface ApplicationData {
  id: number;
  applicationState: ApplicationState | undefined;
  interviewTime: string;
  interviewerName: string;
  interviewType: InterviewType | string;
  candidateName: string;
}

const ApplicationRow = async (application: Application, id: number) => {
  const applicationData: ApplicationData = {
    id: id,
    applicationState: application.applicationState,
    interviewTime: "",
    interviewerName: "",
    interviewType: "",
    candidateName:
      application.candidate.firstName + " " + application.candidate.lastName,
  };
  const applications: ApplicationData[] = [];

  const fetchApplicants = async () => {
    if (application.applicationState !== ApplicationState.Interview) {
      applications.push(applicationData);
      return application;
    }
    const interviews: Interview[] = application.interviews!;
    interviews.forEach((interview) => {
      const interviewTimeParts: string[] = interview
        .interviewTime!.toDateString()
        .split(" ");
      const interviewWeekday = interviewTimeParts[0];
      const interviewDay = interviewTimeParts[1];
      const interviewMonth = interviewTimeParts[2];
      const interviewYear = interviewTimeParts[3];
      const time = `${interviewDay} ${interviewMonth} ${interviewYear}, ${interviewWeekday}`;

      applicationData.interviewTime = time;
      applicationData.interviewerName = interview.interviewerName!;
      applicationData.interviewType = interview.interviewType!;
      applications.push(applicationData);
    });
  };

  await fetchApplicants();
  return applications;
};

export default ApplicationRow;
