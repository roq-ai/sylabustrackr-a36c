const mapping: Record<string, string> = {
  assignments: 'assignment',
  courses: 'course',
  organizations: 'organization',
  resources: 'resource',
  'study-plans': 'study_plan',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
