import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import './index.less';

export default class InfoCard extends React.Component {
  static propTypes = {
    span: PropTypes.number,
    data: PropTypes.shape({}).isRequired,
    columns: PropTypes.shape([]).isRequired,
  };

  static defaultProps = {
    span: 10,
  };

  render() {
    const { span, data, columns } = this.props;
    return (
      <Row className="info-card-container">
        {columns.map((item, index) => (
          <Col span={span} push={index !== 0 ? 12 - span : 0} key={index}>
            <div className="info-card-header">{item.title}</div>
            <ul className="info-card-body">
              {item.maps.map((cur, subIndex) => (
                <li className="info-card-item" key={subIndex}>
                  <span className="info-card-label">{cur.label}：</span>
                  <span className="info-card-val">
                    {cur.render
                      ? cur.render(data[cur.key], data)
                      : data[cur.key]}
                  </span>
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
    );
  }
}
