import Image from "next/image";

export default function NamesList() {
  return (
    <section className="max-w-[25%] flex-1 py-8 border-r border-gray-100">
      <h1 className="mb-6 px-8 text-3xl font-medium">Contact Log</h1>
      <div className="mb-4 bg-[url('/images/phone-icon.svg')] px-8">
        <input
          type="text"
          className="
          h-12 w-full rounded-md bg-gray-50 px-4
          placeholder:text-sm focus:outline-teal-800/30
        "
          placeholder="Search name or number..."
        />
      </div>
      <h2 className="h-10 px-8 text-lg font-medium text-gray-900">Messages</h2>
      <div className="h-[65vh] overflow-y-auto px-8">
        {[1, 2, 3, 4, 5].map((c) => (
          <div
            key={c}
            className={`flex cursor-pointer items-center justify-between ${
              c === 1
                ? "-mx-7 mb-4 rounded-2xl border border-white bg-teal-50/70 p-4 px-8 shadow-lg shadow-gray-100/50"
                : "mb-8"
            }`}
          >
            <div>
              <div>Jason Susanto</div>
              {c === 1 ? (
                <div className="flex items-center text-xs text-red-600">
                  <Image
                    src={"images/red-phone-icon.svg"}
                    alt={c.toString()}
                    height={18}
                    width={18}
                    className="mr-1"
                  />
                  Missed Incomig Call
                </div>
              ) : (
                <div className="text-xs">Why is he acting like that...</div>
              )}
            </div>
            <div className="flex flex-col text-gray-500">
              <span className="text-xs">2m</span>
              {c === 1 ? "" : <span>-&gt;</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
