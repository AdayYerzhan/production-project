import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User, userActions} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async ({username, password}, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username, password,
            });

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
