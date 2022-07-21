import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from '../Components/Profile/myProfile';
import store from '../redux/store';

it('Test MyProfile renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
