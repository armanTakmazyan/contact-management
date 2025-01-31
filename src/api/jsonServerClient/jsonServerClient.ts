import axios from 'axios';
import { JSON_SERVER_ENDPOINT } from './constants';

export const jsonServerClient = axios.create({
  baseURL: `${JSON_SERVER_ENDPOINT}`,
});
