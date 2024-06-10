import { Component, h } from '@stencil/core';

@Component({
  tag: 'other-my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <div>
        includeImportCustomElements = true: <slot></slot>
      </div>
    );
  }
}
