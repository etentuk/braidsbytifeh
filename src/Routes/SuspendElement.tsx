import AppLoader from './../components/Loading/AppLoader/AppLoader';
import { FC, ReactElement, ReactNode, Suspense } from 'react';

interface Props {
  element: ReactNode | ReactElement;
}

const SuspendElement: FC<Props> = ({ element }): ReactElement => {
  return <Suspense fallback={<AppLoader />}>{element}</Suspense>;
};

export { SuspendElement };
