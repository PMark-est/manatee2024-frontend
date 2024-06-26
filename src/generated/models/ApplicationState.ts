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


/**
 * 
 * @export
 */
export const ApplicationState = {
    New: 'New',
    Interview: 'Interview',
    Offer: 'Offer',
    PreOnboard: 'Pre-onboard',
    Hired: 'Hired',
    Rejected: 'Rejected'
} as const;
export type ApplicationState = typeof ApplicationState[keyof typeof ApplicationState];


export function ApplicationStateFromJSON(json: any): ApplicationState {
    return ApplicationStateFromJSONTyped(json, false);
}

export function ApplicationStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationState {
    return json as ApplicationState;
}

export function ApplicationStateToJSON(value?: ApplicationState | null): any {
    return value as any;
}

