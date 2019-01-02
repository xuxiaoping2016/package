import React, { Component } from 'react';

import cspackage from 'cspackage';



Modal.setAppElement('#example');

const examples = [
  SimpleUsage,
  Forms,
  MultipleModals,
  NestedModals,
  ReactRouter
];

class App extends Component {
  render() {
    return (
      <div>
        {examples.map((example, key) => {
          const ExampleApp = example.app;
          return (
            <div key={key + 1} className="example">
              <h3>{`#${key + 1}. ${example.label}`}</h3>
              <ExampleApp />
            </div>
          );
        })}
      </div>
    );
  }
}
