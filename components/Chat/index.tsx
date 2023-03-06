import Messages from "./Messages";

export default function Chat() {
  return (
    <section className="flex flex-1 flex-col border-r border-gray-100 bg-gray-50">
      <header
        className="
          flex items-center justify-between border-b border-gray-100 bg-white p-8
        "
      >
        <div className="group flex cursor-pointer gap-6">
          <button
            className="
              h-12 w-12 rounded-full bg-gray-200 transition-all group-hover:bg-gray-300
            "
          />
          <div className="transition-all group-hover:text-gray-700">
            <h3 className="text-lg font-medium">Jason Susanto</h3>
            <span className="text-xs">+6123192481289</span>
          </div>
        </div>
        <button
          className="
            h-6 w-6 -translate-y-2 text-2xl leading-4
           text-gray-400 transition-all hover:text-gray-600
         "
        >
          ...
        </button>
      </header>

      <Messages />
      
      <footer className="h-24">
        <textarea
          className="
            w-full h-full resize-none border-t border-gray-200/70 bg-gray-100 p-4
            focus:outline-teal-800/30
          "
          placeholder="Enter your message here..."
        />
      </footer>
    </section>
  );
}
