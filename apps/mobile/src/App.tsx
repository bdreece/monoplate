import type { FC } from 'react';
import type { Response } from '@app/models';

import { useQuery } from 'react-query';
import { Card, Accordion } from '@app/ui';
import Layout from './components/Layout';

const ping = async () => {
  const response = await fetch('http://localhost:8080/api/ping');
  const result = (await response.json()) as Response<string>;
  if (!result.success) throw result.error;
  console.log(result.data);
  return result.data;
};

const App: FC = () => {
  const { data: message, error } = useQuery('ping', ping, { retry: false });
  return (
    <Layout>
      <Card title='Hello, monoplate!'>
        <Accordion title='You have successfully launched the mobile app!'>
          <p>{`Ping results: ${error ?? message ?? 'Loading...'}`}</p>
        </Accordion>
      </Card>
    </Layout>
  );
};

export default App;
