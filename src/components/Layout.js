import { ConstantHeader } from "./header/ConstantHeader";

import CustomBreadcrumbs from "./Breadcrumbs"

export function Layout({ locales, navigation, children }) {
  return (
    <div className="text-slate-800 pb-16">
      <ConstantHeader locales={locales} navigation={navigation}/>
      <CustomBreadcrumbs
          homeElement={'Home'}
          capitalizeLinks
        />
      <main>{children}</main>
    </div>
  );
}
