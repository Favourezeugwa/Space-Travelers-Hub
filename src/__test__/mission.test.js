import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Mission from '../Components/Mission/Mission';
import store from '../redux/store';

it('Test Mission renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
