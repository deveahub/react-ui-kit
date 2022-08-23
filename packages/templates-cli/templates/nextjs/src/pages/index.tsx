import type { NextPage } from 'next'
import {styled} from '@rrios-dev/styled';

const Box = styled('div', {
  size: 30,
  color: 'white',
  backgroundColor: '$primary',
});

const Home: NextPage = () => {
  return (<Box />)
}

export default Home
