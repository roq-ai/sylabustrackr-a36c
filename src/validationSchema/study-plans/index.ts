import * as yup from 'yup';

export const studyPlanValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  student_id: yup.string().nullable(),
});
