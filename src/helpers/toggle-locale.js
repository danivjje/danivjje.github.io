export const toggleLocale = (i18n) => {
    const locale = i18n.locale.value;
    const newLocale = locale === "en" ? "ru" : "en";
    i18n.locale.value = newLocale;
    localStorage.setItem("locale", newLocale);
}