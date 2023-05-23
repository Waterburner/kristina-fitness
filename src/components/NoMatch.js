import React from "react";

export default function NoMatch() {
    return (
        <div className="no-match-wrapper">
            <div className="no-match">
                <h2 className="no-match-title english">Page not found</h2>
                <h2 className="no-match-title ukrainian">
                    Сторінку не знайдено
                </h2>
                <p className="nomatch-description english">
                    Make sure that url typed in correctly. Or we didn't make
                    this page yet
                </p>
                <p className="nomatch-description ukrainian">
                    Перевірте правильність адреси. Можливо ми ще не створили цю
                    сторінку
                </p>
            </div>
        </div>
    );
}
