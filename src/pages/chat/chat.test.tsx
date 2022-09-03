import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import Chat from '.';
import { MemoryRouter } from 'react-router-dom';
import { setUser } from '../../store/userReducer';
import store from '../../store';

const route = '/chat-room';
const initialState = {
  user: { name: 'Emmanuel', token: 'dksld' },
  messages: {
    messages: [],
  },
};

test('messages should be zero when app mounts', async () => {
  store.dispatch(setUser({ name: 'Emmanuel', token: 'dksld' }));

  render(
    <MemoryRouter initialEntries={[route]}>
      <Provider store={store}>
        <Chat />
      </Provider>
      ,
    </MemoryRouter>,
  );

  const { messages } = (store.getState() as typeof initialState).messages;
  expect(messages.length).toEqual(0);
});

test('should render new message in ui and update state when input is updated and send button is clicked', async () => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <Provider store={store}>
        <Chat />
      </Provider>
      ,
    </MemoryRouter>,
  );

  await userEvent.type(
    screen.getByRole('textbox', { name: /enter message.../i }),
    'Hello there, how are you?',
  );

  await userEvent.click(screen.getByTestId('send'));
  const { messages } = (store.getState() as typeof initialState).messages;
  expect(messages.length).toEqual(1);
  expect(screen.getByText(/Hello there, how are you?/i)).toBeInTheDocument();
});
