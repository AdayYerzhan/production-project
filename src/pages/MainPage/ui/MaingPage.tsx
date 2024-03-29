import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input/Input";

const MaingPage = () => {
    const {t} = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t("Главаная страница")}
            <Input
                placeholder={t("Введите текст")}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MaingPage;
