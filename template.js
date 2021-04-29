/*
 * @Author: xiaoping.xu
 * @Date: 2021-04-29 13:59:21
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-04-29 13:59:32
 * @Desc: 
 */
import { useState ,useEffect} from 'react';
import PropTypes from 'prop-types';
import './{{template}}.styl';

const {{ template }} = props => {
  //  参数   方法
  const [count, setCount] = useState(0);   
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return <div className="{{template}}">
    {{ template }}
    <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
  </div>
}

{{template}}.defaultProps = {
};

{{template}}.propTypes = {
};

export default {{ template }}
