import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import RestaurantList from './components/RestaurantList/index';
import {RestaurantContext, RestaurantProvider} from './context/restaurant'
import RestaurantCard from './components/RestaurantCard/index';
import Sort from './components/Sort/index';
import restaurant from './context/restaurant';
import { mount } from 'enzyme';

describe('<App />', () => {
	it('should render app', () => {
		shallow(<App />);
	});
});

describe('RestaurantCard Component', () => {
  const wrapper = shallow(<RestaurantCard name='betul' description='betul' delivery_price='100' city='Istanbul' online='Yes'/>);

  it('Should render restaurant card component', () => {
      expect(wrapper.exists()).toBe(true)
  });

  it('Should render restaurant name', () => {
    const text = wrapper.find('h2').text();
    expect(text).toEqual('betul');
  });

  it('Should renders restaurant description', () => {
    const text = wrapper.find('p').text();
    expect(text).toEqual('betul');
  });
  
  it('Should renders restaurant delivery_price', () => {
    const text = wrapper.find('h4').text();
    expect(text).toEqual('Price:1 €');
  });

  it('Should renders restaurant city', () => {
    const text = wrapper.find('h6').text();
    expect(text).toEqual('City:Istanbul');
  });

  it('Should renders restaurant serves online or not', () => {
    const text = wrapper.find('h3').text();
    expect(text).toEqual('Online: Yes');
  });
});

const FunctionalComponent = () => {
  RestaurantList();
  return <div />;
}

it('does not throw error when wrapped in RestaurantProvider', () => {
  expect(() => {
    shallow(
      <RestaurantProvider>
        <FunctionalComponent />
      </RestaurantProvider>
    )
  }).not.toThrow()
});
