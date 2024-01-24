import { useSetState } from 'ahooks';
import Preview from './Preview';

const Show = (props: any) => {
  const [state, setState] = useSetState({ show: true });

  return (
    <div className="w-100">
      <div className="w-100">
        {props.show}
        <p style={{ height: 16, margin: 0 }} onClick={() => setState({ show: !state.show })}></p>
      </div>
      <div onClick={() => setState({ show: !state.show })}>{state.show && <Preview value={props.detail} />}</div>
    </div>
  );
};

export default Show;
