import store from '../../store';

describe('store/index TEST', () => {
    it('初期値を確認', () => {
        expect( store.getState() ).toStrictEqual({
            todos: [],
            visibleFilter: 'SHOW_ALL'
        });
    });
});