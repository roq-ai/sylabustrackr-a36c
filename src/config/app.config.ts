interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Student'],
  tenantRoles: ['Administrator', 'Teacher', 'Academic Advisor'],
  tenantName: 'Organization',
  applicationName: 'SylabusTrackr',
  addOns: [],
};
