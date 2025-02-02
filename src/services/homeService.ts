import { IClipResponse } from '@/types/clip';
import axios from 'axios';

export const getHomeClips = async () => {
  const response = await axios.get<IClipResponse[]>(`http://localhost:3001/home`);
  return response.data;
};
