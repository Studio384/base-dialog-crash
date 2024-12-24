import { Dialog } from "@base-ui-components/react/dialog";

export default function Home() {
  return (
    <div className="grid @4xl:grid-cols-[300px_auto]">
      <div className="bg-blue-50 hidden @4xl:flex">
        <div className="overflow-scroll">
          <div className="sticky top-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75M1 8a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 8m0 5.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75" />
            </svg>
          </div>
          <p>
            Opening the dialog and resizing the window until this sidebar
            disappears causes the tab to crash in Chromium based browser with
            STATUS_ACCESS_VIOLATION.
          </p>
        </div>
      </div>
      <div className="bg-orange-50">
        <div className="flex items-center justify-center h-screen">
          <Dialog.Root>
            <Dialog.Trigger className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
              Open this
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop className="fixed inset-0 bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70" />
              <Dialog.Popup className="fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 p-6 text-gray-900 outline-1 outline-gray-200 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300">
                <Dialog.Title className="-mt-1.5 mb-1 text-lg font-medium">
                  Now resize the window
                </Dialog.Title>
                <Dialog.Description className="mb-6 text-base text-gray-600">
                  When you reach the point where the sidebar is set to
                  disappear, the tab will crash.
                </Dialog.Description>
                <div className="flex justify-end gap-4">
                  <Dialog.Close className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
                    Close
                  </Dialog.Close>
                </div>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
}
