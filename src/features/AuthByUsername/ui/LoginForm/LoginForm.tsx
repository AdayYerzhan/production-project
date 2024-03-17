import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './LoginForm.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {memo, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "features/AuthByUsername/model/slice/loginSlice";
import {getLoginState} from "features/AuthByUsername/model/selectors/getLoginState";

interface LoginFormProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password} = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    return (
        <div className={ classNames(cls.LoginForm, {}, [className]) }>
            <Input
                autofocus
                type='text'
                className={cls.input}
                placeholder={t('Введите логин')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type='text'
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
