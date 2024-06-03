import Layout from '../../components/layout';
import style from './dashboard.module.scss';

const index = () => {
  return (
    <Layout pageTitle="Dashboard">
      <div className={style.mainWrapper}>
        <div>Dashboard</div>
      </div>
    </Layout>
  );
};

export default index;
