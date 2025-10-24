import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import CookiesContent from "@/components/legal/CookiesContent";

export const metadata = {
  title: "Política de Cookies - Kontaly",
  description:
    "Política de Cookies de Kontaly. Conoce cómo utilizamos cookies para mejorar tu experiencia.",
};

export default function CookiesPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <CookiesContent />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
