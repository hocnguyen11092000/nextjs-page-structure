import Assets from "@/components/Assets";
import Banner from "@/components/Banner";
import Collections from "@/components/Collections";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Typo from "@/components/Typo";
import "@/utils/index";
import { loadTranslations } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";
import { useTranslation } from "react-i18next";
import { pageResult } from "@/utils/mapping-v2";
import { data1, data2, data3, data4, data5, data6 } from "@/mocks/page";

export default function Page() {
  const pageData = pageResult(data6);

  const { t } = useTranslation();

  const comp: any = {
    BANNER_BUILDER: <Banner />,
    TYPOGRAPHY_BUILDER: <Typo />,
    COLLECTIONS_BUILDER: <Collections />,
    ASSETS_BUILDER: <Assets />,
    FORM_BUILDER: <Form />,
  };
  const renderHTML = (data: Array<any>, parentCol: number = 12) => {
    return (
      <>
        {data.map((item, index) => {
          const col = Math.round((item.cols * 12) / parentCol);
          return (
            <div key={index} className={`col-${col}`}>
              {comp[item.data.code]}
              <div className="row">
                {item?.children?.length > 0 &&
                  renderHTML(item.children, item.cols)}
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <b>{t("key1")}</b>
      <Header></Header>
      {pageData.map((c, index) => (
        <div key={index} className="container">
          <div className="row">{renderHTML(c)}</div>
        </div>
      ))}
    </>
  );
}
