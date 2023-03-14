import { createContext, useContext, useState } from "react";
import NameForm from "../src/pages/components/user/creation/NameForm";
import AddressForm from "../src/pages/components/user/creation/AddressForm";
import DataConsentForm from "../src/pages/components/user/creation/DataConsentForm";


const views: Record<1 | 2 | 3, JSX.Element> = {
  1: (
    <div>
      <NameForm  />
    </div>
  ),
  2: (
    <div>
      <AddressForm />
    </div>
  ),
  3: (
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

  function handleClick(view: 1 | 2 | 3): void {
    setCurrentView(view);
  }

  return (
    <div className="flex justify-center text-c.green ">
      {Object.keys(views).map((view: any) => (
        <div key={view} className="pt-16">
          <input
            id="inline-radio"
            type="radio"
            value=""
            defaultChecked={currentView === Number(view)}
            name="inline-radio-group"
            className="w-4 h-4 m-2 "
            onClick={() => handleClick(view as 1 | 2 | 3)}
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
  currentView: 1 | 2 | 3;
  setCurrentView: (view: 1 | 2 | 3) => void;
};

export const ViewContext = createContext<ViewContextType>({
  currentView: 1,
  setCurrentView: () => {},
});




export default function ViewProvider(props: any): JSX.Element {
  const [currentView, setCurrentView] = useState<1 | 2 | 3>(1);


  return (
    <ViewContext.Provider value={{ currentView, setCurrentView }}>
       <CurrentView />
      {props.children}
      <ViewSwitcher />
    </ViewContext.Provider>
  );
}

