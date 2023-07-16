import axios from 'axios';
import queryString from 'query-string';
import { StudyPlanInterface, StudyPlanGetQueryInterface } from 'interfaces/study-plan';
import { GetQueryInterface } from '../../interfaces';

export const getStudyPlans = async (query?: StudyPlanGetQueryInterface) => {
  const response = await axios.get(`/api/study-plans${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createStudyPlan = async (studyPlan: StudyPlanInterface) => {
  const response = await axios.post('/api/study-plans', studyPlan);
  return response.data;
};

export const updateStudyPlanById = async (id: string, studyPlan: StudyPlanInterface) => {
  const response = await axios.put(`/api/study-plans/${id}`, studyPlan);
  return response.data;
};

export const getStudyPlanById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/study-plans/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteStudyPlanById = async (id: string) => {
  const response = await axios.delete(`/api/study-plans/${id}`);
  return response.data;
};
