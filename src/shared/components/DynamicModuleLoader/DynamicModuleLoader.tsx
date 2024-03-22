import {useDispatch, useStore} from "react-redux";
import {ReduxStoreWithManager} from "app/providers/StoreProvider";
import {FC, useEffect} from "react";
import {loginReducer} from "features/AuthByUsername/model/slice/loginSlice";
import {StateSchemaKey} from "app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducerListKey = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListKey) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer`});
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListKey) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer`});
                });
            }
        };

        // eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};
