import { AppLoader } from 'components';
import { FC, ReactElement, ReactNode, Suspense } from 'react';

interface Props {
  element: ReactNode | ReactElement;
  isProtected?: boolean;
}

const SuspendElement: FC<Props> = ({ element }): ReactElement => {
  return <Suspense fallback={<AppLoader />}>{element}</Suspense>;
};

export { SuspendElement };
