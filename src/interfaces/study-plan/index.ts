import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StudyPlanInterface {
  id?: string;
  name: string;
  description?: string;
  student_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface StudyPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  student_id?: string;
}
