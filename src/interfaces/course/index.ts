import { AssignmentInterface } from 'interfaces/assignment';
import { ResourceInterface } from 'interfaces/resource';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  teacher_id?: string;
  created_at?: any;
  updated_at?: any;
  assignment?: AssignmentInterface[];
  resource?: ResourceInterface[];
  user?: UserInterface;
  _count?: {
    assignment?: number;
    resource?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  teacher_id?: string;
}
