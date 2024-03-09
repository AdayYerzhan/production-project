import { counterReducer, counterActions} from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice.test", () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };

        expect(
            counterReducer(state, counterActions.decrement()),
        )
            .toEqual({ value: 9 });
    });

    test('incremenet', () => {
        const state: CounterSchema = { value: 10 };

        expect(
            counterReducer(state, counterActions.incremenet()),
        )
            .toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.incremenet()),
        )
            .toEqual({ value: 1 });
    });
});
