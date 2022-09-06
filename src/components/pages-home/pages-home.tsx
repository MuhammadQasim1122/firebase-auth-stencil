import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pages-home',
  styleUrl: 'pages-home.css',
  shadow: true,
})
export class PagesHome {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
