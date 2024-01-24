import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className="center">
      <div>
        <h2>页面不存在</h2>
        <p>
          <Link to="/ndzy-todos/">返回首页</Link>
        </p>
      </div>
    </div>
  );
};

export default NoMatch;
