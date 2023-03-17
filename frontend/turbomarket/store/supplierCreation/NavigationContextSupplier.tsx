
import DataConsentForm from "../../src/pages/components/supplier/creation/DataConsentForm";
import CompanyAddressForm from "../../src/pages/components/supplier/creation/CompanyAddressForm";
import CompanyNameForm from "../../src/pages/components/supplier/creation/CompanyNameForm";
import CopmanyNotificationsForm from "../../src/pages/components/supplier/creation/CopmanyNotificationsForm"


import { createContext, useContext, useState } from "react";



const views: Record<1 | 2 | 3 | 4, JSX.Element> = {
  1: (
    <div>
      <CompanyAddressForm  />
    </div>
  ),
  2: (
    <div>
      <CompanyNameForm />
    </div>
  ),
  3: (
    <div>
      <CopmanyNotificationsForm />
    </div>
  ),
  4: (
    <div>
      <DataConsentForm />
    </div>
  ),
};

function CurrentView(): JSX.Element {
  const { currentView } = useContext(ViewContext);

  return <div>{views[currentView]}</div>;
}

function ViewSwitcher(): JSX.Element { 
  const { currentView, setCurrentView } = useContext(ViewContext);

  function handleClick(view: 1 | 2 | 3 | 4): void {
    setCurrentView(view);
  }

  return (
    <div className="flex justify-center text-c.green pt-6 ">
      {Object.keys(views).map((view: any) => (
        <div key={view} className="">
          <input
            id="inline-radio"
            type="radio"
            value=""
            defaultChecked={currentView === Number(view)}
            name="inline-radio-group"
            className="w-4 h-4 m-2 text-green-600  focus:ring-green-600 "
            onClick={() => handleClick(view as 1 | 2 | 3 | 4)}
          />
        </div>
      ))}
    </div>
  );
}

interface ViewContainerProps {
  children: React.ReactNode;
}

type ViewContextType = {
  currentView: 1 | 2 | 3 | 4;
  setCurrentView: (view: 1 | 2 | 3 | 4) => void;
};

export const ViewContext = createContext<ViewContextType>({
  currentView: 1,
  setCurrentView: () => {},
});




export default function ViewProvider(props: any): JSX.Element {
  const [currentView, setCurrentView] = useState<1 | 2 | 3 | 4>(1);


  return (
    <ViewContext.Provider value={{ currentView, setCurrentView }}>
       <CurrentView />
      {props.children}
      <ViewSwitcher />
    </ViewContext.Provider>
  );
}

