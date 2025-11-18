import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from './(home)/page';

test.skip('Page', () => {
    render(<Page />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Challange your mind and have fun !' })
    ).toBeDefined();
    expect(screen.getByText(/hello, world!/i))
});