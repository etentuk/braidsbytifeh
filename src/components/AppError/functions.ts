import { accessDenied, bugFixing, pageNotFound } from 'components/AppIcons/svg';
import { ErrorStatus, ErrorMessage } from './constants';

export const getErrorDetails = (status: ErrorStatus): any => {
  const getValues = (icon: any, message: ErrorMessage): any => ({
    appIcon: icon,
    message,
  });
  switch (status) {
    case ErrorStatus.NOT_FOUND:
      return getValues(pageNotFound, ErrorMessage.NOT_FOUND);
    case ErrorStatus.UNAUTHORIZED:
      return getValues(accessDenied, ErrorMessage.UNAUTHORIZED);
    case ErrorStatus.ERROR:
      return getValues(bugFixing, ErrorMessage.ERROR);
    default:
      return pageNotFound;
  }
};
