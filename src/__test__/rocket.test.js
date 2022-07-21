import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import RocketContainer from '../Components/Rocket/RocketContainer';
import store from '../redux/store';

it('Test RocketContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <RocketContainer />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
