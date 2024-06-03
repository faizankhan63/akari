import Layout from '../../components/layout';
import style from './dashboard.module.scss';

const index = () => {
  return (
    <Layout>
      <div className={style.mainWrapper}>
        <div>Dashboard</div>
      </div>
    </Layout>
  );
};

export default index;
