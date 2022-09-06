import { newSpecPage } from '@stencil/core/testing';
import { PagesHome } from '../pages-home';

describe('pages-home', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PagesHome],
      html: `<pages-home></pages-home>`,
    });
    expect(page.root).toEqualHtml(`
      <pages-home>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pages-home>
    `);
  });
});
