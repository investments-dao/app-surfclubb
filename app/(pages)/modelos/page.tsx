import type { Metadata } from 'next';

import Content from '~/components/widgets/Content';
import Modelos from '~/components/widgets/Modelos';

import { modelosData, modelos1Data, modelos2Data, } from '~/shared/data';

export const metadata: Metadata = {
  title: `Modelos`,
};

const Page = () => {
  return (
    <>
      <Modelos data={modelosData} />
      <Content {...modelos1Data} />
      <Content {...modelos2Data} />
      
      
    </>
  );
};

export default Page;