import { newE2EPage } from '@stencil/core/testing';

describe('pages-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pages-home></pages-home>');

    const element = await page.find('pages-home');
    expect(element).toHaveClass('hydrated');
  });
});
