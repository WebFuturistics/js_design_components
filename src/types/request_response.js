'use strict';

// @flow

// external imports

// internal imports

// types definition
export type RequestHeaderType = {[string]: string};
export type RequestHeadersType = Array<RequestHeaderType>;

export type HapiErrorType = {
    statusCode: number,
    error: string,
    message: string
};