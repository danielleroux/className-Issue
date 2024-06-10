import React from 'react';
import { MyComponent } from 'some-lib-code-react';
import { OtherMyComponent } from 'other-lib-code-react';
import { defineCustomElements } from 'some-lib-code/loader';
defineCustomElements();

function App() {
  const [value, setValue] = React.useState(false);

  return (
    <div>
      <MyComponent className={value ? 'is-red' : ''}>
        Should apply 'is-red' = {value ? 'true' : 'false'}
      </MyComponent>

      <OtherMyComponent className={value ? 'is-red' : ''}>
        Should apply 'is-red' = {value ? 'true' : 'false'}
      </OtherMyComponent>

      <button onClick={() => setValue(!value)}>Test 123</button>
    </div>
  );
}

export default App;
