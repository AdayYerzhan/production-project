import React from 'react';
import {useTranslation} from "react-i18next";
import {BugButton} from "app/providers/ErrorBoundary";

const MaingPage = () => {
    const {t, i18n} = useTranslation();

    return (
        <div>
            <BugButton />
            {t("Главаная страница")}
        </div>
    );
};

export default MaingPage;
