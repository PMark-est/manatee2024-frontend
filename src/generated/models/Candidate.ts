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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Candidate
 */
export interface Candidate {
    /**
     * 
     * @type {number}
     * @memberof Candidate
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Candidate
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof Candidate
     */
    lastName: string;
}

/**
 * Check if a given object implements the Candidate interface.
 */
export function instanceOfCandidate(value: object): boolean {
    if (!('firstName' in value)) return false;
    if (!('lastName' in value)) return false;
    return true;
}

export function CandidateFromJSON(json: any): Candidate {
    return CandidateFromJSONTyped(json, false);
}

export function CandidateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Candidate {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
    };
}

export function CandidateToJSON(value?: Candidate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
    };
}

