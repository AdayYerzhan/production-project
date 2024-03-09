import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../modal/slice/counterSlice";
import {getCounterValue} from "../modal/selectors/getCounterValue/getCounterValue";
import {useTranslation} from "react-i18next";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const {t} = useTranslation();
    const increment = () => {
        dispatch(counterActions.incremenet());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <Button
                onClick={increment}
                data-testid='increment-btn'
            >
                {t('increment')}
            </Button>
            <Button
                onClick={decrement}
                data-testid='decrement-btn'
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
