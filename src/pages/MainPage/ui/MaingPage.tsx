import React from 'react';
import {useTranslation} from "react-i18next";

const MaingPage = () => {
    const {t, i18n} = useTranslation();

    return (
        <div>
            {t("Главаная страница")}
        </div>
    );
};

export default MaingPage;
