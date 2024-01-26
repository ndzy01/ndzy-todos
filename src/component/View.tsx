import dayjs from 'dayjs';
import { Space } from 'antd';
import Drawer from './Drawer';
import { generateUUID } from '../utils';

const View = (props: any) => {
  return (
    <Drawer title="查看" btnName="查看">
      <div
        style={{ padding: '0 8px' }}
        id={`preview-${generateUUID()}`}
        className="ndzy-preview"
        dangerouslySetInnerHTML={{ __html: props.detail }}
      />
      <div>
        <Space>
          <span style={{ color: 'blue' }}>创建人：{props.userName || '--'}</span>

          <span style={{ color: 'green' }}>标签：{props.tagName || '--'}</span>

          <span style={{ color: 'red' }}>终止日期：{dayjs(props.deadline).format('YYYY-MM-DD')}</span>
        </Space>
      </div>
      <div>
        <Space>
          <span>创建日期：{dayjs(props.createdAt).subtract(8, 'h').format('YYYY-MM-DD')}</span>

          <span>更新日期：{dayjs(props.updatedAt).subtract(8, 'h').format('YYYY-MM-DD')}</span>
        </Space>
      </div>
    </Drawer>
  );
};

export default View;
