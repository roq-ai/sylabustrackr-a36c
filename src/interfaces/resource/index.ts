import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface ResourceInterface {
  id?: string;
  name: string;
  description?: string;
  course_id?: string;
  created_at?: any;
  updated_at?: any;

  course?: CourseInterface;
  _count?: {};
}

export interface ResourceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  course_id?: string;
}
