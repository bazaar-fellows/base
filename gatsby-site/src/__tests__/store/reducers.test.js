import reducer from '../../redux/reducers';

describe('Reducer', () => {

    it('should return the initial state', () => {
        let initialState = {
            cart: []
        };
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it("should handle UPDATECART", () => {
        let expectedState = { cart: [50] };
        expect(
          reducer(
            undefined,
            {
              type: "UPDATECART",
              payload: 50
            }
          )
        ).toEqual(expectedState);
      });

    it("should handle UPDATECART", () => {});

});