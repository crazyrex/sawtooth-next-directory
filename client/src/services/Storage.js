/* Copyright 2018 Contributors to Hyperledger Sawtooth

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
----------------------------------------------------------------------------- */


/**
 *
 * Extensible storage service
 *
 *
 *
 */
const tokenKey = 'auth_token';
const userIdKey = 'user_id';


export const get = (key) => localStorage.getItem(key);
export const set = (key, value) => localStorage.setItem(key, value);
export const remove = (key) => localStorage.removeItem(key);


export const getToken = () => localStorage.getItem(tokenKey);
export const setToken = (value) => localStorage.setItem(tokenKey, value);
export const removeToken = () => localStorage.removeItem(tokenKey);


export const getUserId = () => localStorage.getItem(userIdKey);
export const setUserId = (value) => localStorage.setItem(userIdKey, value);
export const removeUserId = () => localStorage.removeItem(userIdKey);
