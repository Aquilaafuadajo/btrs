import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store';
import SignIn from '.';

test('if a name is entered, login button should be enabled', async () => {
  render(
    <Provider store={store}>
      <SignIn />
    </Provider>,
  );
  expect(screen.getByRole('button', { name: /enter room 🚀/i })).toBeDisabled();

  await userEvent.type(
    screen.getByRole('textbox', { name: /username/i }),
    'Emmanuel',
  );

  expect(screen.getByRole('textbox', { name: /username/i })).toBeEnabled();
});
