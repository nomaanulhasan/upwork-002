import Image from "next/image";

export default function Notes() {
  return (
    <section className="max-w-[20%] flex-1 p-6">
      <button
        className="
          mb-8 mt-28 flex h-10 w-full items-center justify-start gap-4
          rounded-md bg-teal-900 px-8 text-white transition-all
          hover:bg-teal-900/90
        "
      >
        <Image
          src={"images/phone-icon.svg"}
          alt={""}
          height={24}
          width={24}
          className="invert"
        />
        Add New Note
      </button>

      <div className="mb-6 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-800">Notes</span>
        <button className="text-xs text-gray-500 hover:text-gray-900">
          View All <span className="pl-1 text-sm">&gt;</span>
        </button>
      </div>
      <div className="h-[62vh] overflow-auto">
      {[1, 2, 3, 4, 5].map((c) => (
          <div key={c} className="group mb-4 flex cursor-pointer">
            <button
              className="
               mr-4 flex h-11 w-11 items-center justify-center rounded-lg
              bg-gray-100 transition-all group-hover:bg-gray-200/75
            "
            >
              <Image
                src={"images/phone-icon.svg"}
                className="opacity-50"
                height={24}
                width={24}
                alt={""}
              />
            </button>
            <div className="flex flex-col justify-between py-[0.125rem]">
              <div className="text-sm text-gray-800 group-hover:text-black">
                Schedule VCT APAC.pdf
              </div>
              <div className="flex gap-4 text-xs text-gray-500 group-hover:text-gray-700">
                <span className="">490kb</span>
                <span className="">07 Mar 2023</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
