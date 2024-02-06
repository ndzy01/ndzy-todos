import { Button, Form, Input, Select, Space, DatePicker, Row, Col } from 'antd';
import { useContext, useRef, useState } from 'react';
import { useSize } from 'ahooks';
import { DownOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { formItemLayout } from '../utils';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';
import EditTodo from './EditTodo';
import Drawer from '../component/Drawer';

const { RangePicker } = DatePicker;
const Search = () => {
  const [form] = Form.useForm();
  const ref = useRef(null);
  const size = useSize(ref);
  const { getAllTodo } = useTodo();
  const { state } = useContext(ReduxContext);
  const span = Number(size?.width) > 800 ? 8 : 24;
  const [expand, setExpand] = useState(false);

  return (
    <div ref={ref}>
      <Form
        form={form}
        {...formItemLayout}
        name="search"
        onFinish={(values: any) => {
          Object.keys(values).map((item) => {
            if (!values[item]) {
              delete values[item];
            }
            if (item === 'createdRange' || item === 'updatedRange' || item === 'deadlineRange') {
              if (values[item]) {
                values[item] = JSON.stringify(values[item].map((item: any) => dayjs(item).format('YYYY-MM-DD')));
              }
            }
          });
          getAllTodo(values);
        }}
        scrollToFirstError
      >
        <Row gutter={24}>
          <Col span={span}>
            <Form.Item name="name" label="名称">
              <Input className="w-100" allowClear />
            </Form.Item>
          </Col>
          {expand && (
            <>
              <Col span={span}>
                <Form.Item name="tagId" label="标签">
                  <Select
                    allowClear
                    className="w-100"
                    options={state.tags.map((item) => ({ label: `${item.name}-(${item.userName})`, value: item.id }))}
                  />
                </Form.Item>
              </Col>
              <Col span={span}>
                <Form.Item name="operationSource" label="来源">
                  <Select
                    allowClear
                    className="w-100"
                    options={[
                      { label: 'h5', value: 'h5' },
                      { label: '微信', value: 'wx' },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={span}>
                <Form.Item name="isFinish" label="状态">
                  <Select
                    allowClear
                    className="w-100"
                    options={[
                      { label: '处理中', value: '0' },
                      { label: '已完成', value: '1' },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={span}>
                <Form.Item name="deadlineRange" label="截止时间">
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={span}>
                <Form.Item name="createdRange" label="创建时间">
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={span}>
                <Form.Item name="updatedRange" label="更新时间">
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </>
          )}
          <Col span={span}>
            <Space>
              <Button loading={state.loading} type="primary" htmlType="submit">
                搜索
              </Button>

              <Button
                type="link"
                onClick={() => {
                  form.resetFields();
                  getAllTodo();
                }}
              >
                重置
              </Button>

              <a
                style={{ fontSize: 12 }}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                <DownOutlined rotate={expand ? 180 : 0} />
                {expand ? '收起' : '展开'}
              </a>
            </Space>
          </Col>
          <Col span={span}>
            <Space>
              <Drawer title="新建" btnName="新建">
                <EditTodo />
              </Drawer>

              <div>
                {state.user ? (
                  <div style={{ minWidth: 33 }} className="sky-blue center">
                    用户：{state.user.name}
                  </div>
                ) : (
                  <div style={{ minWidth: 33 }} className="sky-blue center">
                    用户：游客
                  </div>
                )}
              </div>
            </Space>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Search;
