import { useTranslation } from "react-i18next";

export default function Header(props: any) {
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{
        height: "80px",
      }}
    >
      <ul>
        <li>Home</li>
      </ul>
      <select
        id=""
        onChange={(event) => i18n.changeLanguage(event.target.value)}
      >
        <option value="GB">GB</option>
        <option value="PT">PT</option>
        <option value="UA">UA</option>
      </select>
    </div>
  );
}
