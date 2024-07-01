import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <>
      <div>banner</div>
      <b>{t("key1")}</b>
    </>
  );
}
