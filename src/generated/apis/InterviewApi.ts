/* tslint:disable */
/* eslint-disable */
/**
 * Manatee API
 * Candidate application management API codenamed \"Manatee\" is a mockup of a real system, where recruiters can view new applications and follow a process until successful onboarding.   
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Interview,
  InterviewType,
} from '../models/index';
import {
    InterviewFromJSON,
    InterviewToJSON,
    InterviewTypeFromJSON,
    InterviewTypeToJSON,
} from '../models/index';

export interface GetInterviewRequest {
    applicationId: number;
}

export interface ScheduleInterviewRequest {
    interviewType: InterviewType;
    interviewerName: string;
    interviewTime: Date;
    interview: Interview;
}

/**
 * 
 */
export class InterviewApi extends runtime.BaseAPI {

    /**
     * Selects all interviews that have an application linked to it with the given Id.
     * Queries interviews linked with application.
     */
    async getInterviewRaw(requestParameters: GetInterviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Interview>>> {
        if (requestParameters['applicationId'] == null) {
            throw new runtime.RequiredError(
                'applicationId',
                'Required parameter "applicationId" was null or undefined when calling getInterview().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/interviews/{applicationId}`.replace(`{${"applicationId"}}`, encodeURIComponent(String(requestParameters['applicationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InterviewFromJSON));
    }

    /**
     * Selects all interviews that have an application linked to it with the given Id.
     * Queries interviews linked with application.
     */
    async getInterview(requestParameters: GetInterviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Interview>> {
        const response = await this.getInterviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Selects all interviews stored in database and returns them as an array.
     * Queries all interviews.
     */
    async getInterviewsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Interview>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/interviews`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InterviewFromJSON));
    }

    /**
     * Selects all interviews stored in database and returns them as an array.
     * Queries all interviews.
     */
    async getInterviews(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Interview>> {
        const response = await this.getInterviewsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Submits a new interview and changes the application state to interview.
     * Schedules a new interview.
     */
    async scheduleInterviewRaw(requestParameters: ScheduleInterviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Interview>> {
        if (requestParameters['interviewType'] == null) {
            throw new runtime.RequiredError(
                'interviewType',
                'Required parameter "interviewType" was null or undefined when calling scheduleInterview().'
            );
        }

        if (requestParameters['interviewerName'] == null) {
            throw new runtime.RequiredError(
                'interviewerName',
                'Required parameter "interviewerName" was null or undefined when calling scheduleInterview().'
            );
        }

        if (requestParameters['interviewTime'] == null) {
            throw new runtime.RequiredError(
                'interviewTime',
                'Required parameter "interviewTime" was null or undefined when calling scheduleInterview().'
            );
        }

        if (requestParameters['interview'] == null) {
            throw new runtime.RequiredError(
                'interview',
                'Required parameter "interview" was null or undefined when calling scheduleInterview().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/interviews/{interviewType}/{interviewerName}/{interviewTime}`.replace(`{${"interviewType"}}`, encodeURIComponent(String(requestParameters['interviewType']))).replace(`{${"interviewerName"}}`, encodeURIComponent(String(requestParameters['interviewerName']))).replace(`{${"interviewTime"}}`, encodeURIComponent(String(requestParameters['interviewTime']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InterviewToJSON(requestParameters['interview']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InterviewFromJSON(jsonValue));
    }

    /**
     * Submits a new interview and changes the application state to interview.
     * Schedules a new interview.
     */
    async scheduleInterview(requestParameters: ScheduleInterviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Interview> {
        const response = await this.scheduleInterviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
