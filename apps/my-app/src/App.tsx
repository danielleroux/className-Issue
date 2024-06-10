import React from 'react';
import { MyComponent } from 'some-lib-code-react';
import { defineCustomElements } from 'some-lib-code/loader';
defineCustomElements();

function App() {
  const [value, setValue] = React.useState(false);

  return (
    <div>
      <MyComponent className={value ? 'is-red' : ''}>
        {value ? 'true' : 'false'}
      </MyComponent>

      <button onClick={() => setValue(!value)}>Test 123</button>
    </div>
  );
}

export default App;
