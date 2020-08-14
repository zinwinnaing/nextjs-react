import Layout from '../components/layout/Layout';
import Meta from '../components/meta/Meta';

const Index = () => {
  return (
    <>
      <Meta title="Home" description="HomePage" />
      <Layout active="home">
        <div style={{ paddingTop: '5rem' }}>
          Hello !!!!
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Index;
