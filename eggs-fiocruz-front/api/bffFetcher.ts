import axios from 'axios';
import { getAccessToken } from '@/utils/get-user-information';

const fetcher = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_MAIN_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
function bffFetcher() {
    fetcher.defaults.headers.common.Authorization = getAccessToken();
    return fetcher;
}

export default bffFetcher;
