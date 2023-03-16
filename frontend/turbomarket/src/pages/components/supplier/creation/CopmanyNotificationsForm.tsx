import React, { Fragment, useContext, useState, FormEvent } from "react";
import Image from "next/image";
import { NotificationSettingsContext } from "../../../../../store/supplierCreation/DataContextSupplier";
import { ViewContext } from "store/supplierCreation/NavigationContextSupplier";
import { NotificationSettings } from "../../../../../store/supplierCreation/DataContextSupplier";

export default function CopmanyNotificationsForm() {
  const { notificationSettings, setNotificationSettings } = useContext(NotificationSettingsContext)
  const { setCurrentView } = useContext(ViewContext);
  const [notiComments, setNotiComments] = useState(false);
  const [notiOrders, setNotiOrders] = useState(false); 
  const [notiMsg, setNotiMsg] = useState(false);

  const [pushAsEmail, setPushAsEmail] = useState(false);
  const [pushEverything, setPushEverything] = useState(false);
  const [pushNone, setPushNone] = useState(true);

  const newNotificationSettings = {
    notiComments: notiComments,
    notiOrders: notiOrders,
    notiMessages: notiMsg,
    pushAsEmail: pushAsEmail,
    pushEverything: pushEverything,
    pushNone: pushNone,
  };

  function validateForm(newNotificationSettings: NotificationSettings) {
    if (pushAsEmail === true || pushEverything === true) {
      newNotificationSettings.pushNone = false;
    }
  }



  function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    validateForm(newNotificationSettings);
    setNotificationSettings(newNotificationSettings);
    setCurrentView(4);

    
    
  }


  return (
    <Fragment>
        <section className="grid grid-cols-2">
       <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 mx-12 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Notifications</h3>
              <p className=" col-auto mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
            </div>
          </div>


          <div className="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div className="overflow-hidden shadow-2xl  rounded-2xl">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <fieldset>
                    <legend className="sr-only">By Email</legend>
                    <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                      By Email
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                            onChange={() => setNotiComments(!notiComments)}
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label htmlFor="comments" className="font-medium text-gray-900">
                            Comments
                          </label>
                          <p className="text-gray-500">Get notified when someone leaves a review.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="orders"
                            name="orders"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                            onChange={() => setNotiOrders(!notiOrders)}
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label htmlFor="candidates" className="font-medium text-gray-900">
                            Orders
                          </label>
                          <p className="text-gray-500">Get notified when you receive a order.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="msg"
                            name="msg"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                            onChange={() => setNotiMsg(!notiMsg)}
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label htmlFor="offers" className="font-medium text-gray-900">
                            Messages
                          </label>
                          <p className="text-gray-500">Get notified when you receive a message.</p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                      Push Notifications
                    </legend>
                    <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                          onChange={() => {
                            setPushEverything(!pushEverything);
                          }}
                        />
                        <label
                          htmlFor="push-everything"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                          onChange={() => {
                            setPushAsEmail(!pushAsEmail)
                          
                          } }
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                          defaultChecked={true}
                        />
                        <label
                          htmlFor="push-nothing"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="bg-white px-4 py-3 text-right sm:px-6">
                  <button
                   onClick={handleSubmit}
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                  >
                    Save
                   
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="place-self-center pt-20">
        <Image
          src="/images/food-notification.png"
          alt="Hero picture of vegtables on a table"
          className="rounded-full shadow-2xl"
          width={500}
          height={500}
        />
      </div>
      </section>
     
    </Fragment>
  );
}
