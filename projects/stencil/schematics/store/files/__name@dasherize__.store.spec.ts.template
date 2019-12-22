import reducer, { <%= camelize(name) %>StoreActoins, State } from './<%= dasherize(name) %>.store';

describe('<%= camelize(name) %> reducer', () => {
  it('action type : save<%= classify(name) %>', () => {
    const state: State = { <%= camelize(name) %>: null };
    const updatedState = null;
    const result = reducer(state, <%= camelize(name) %>StoreActions.save<%= classify(name) %>({ <%= camelize(name) %>: updatedState }));

    expect(result).toEqual({ <%= camelize(name) %>: updatedState });
  });
});