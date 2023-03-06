import Image from "next/image";

export default function Messages() {
  return (
    <section className="flex-1 overflow-y-auto px-8">
      <div className="flex w-full items-center justify-center">
        <hr className="my-8 h-[1px] w-full rounded border-0 bg-gray-200 dark:bg-gray-700" />
        <div className="absolute bg-gray-50 px-4 text-xs text-gray-400 dark:bg-gray-900">
          Yesterday
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2 w-fit rounded-md border bg-white/50 py-2 px-4">
          Ron, when you&apos;ll book a plane ticket?
        </div>
        <div className="text-xs uppercase text-gray-400">09:27 pm</div>
      </div>

      <div className="mb-4 flex flex-col items-end">
        <div className="mb-2 w-fit rounded-md bg-green-700/10 py-2 px-4">
          Maybe tomorrow
        </div>
        <div className="mb-2 w-fit rounded-md bg-green-700/10 py-2 px-4">
          After we go back to SG
        </div>
        <div className="flex items-center gap-2 text-xs uppercase text-gray-400">
          09:28 pm{" "}
          <Image
            src={"images/red-phone-icon.svg"}
            alt={""}
            height={18}
            width={18}
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2 flex w-fit items-center gap-2 rounded-md border bg-white/50 py-2 px-4">
          <Image
            src={"images/green-phone-icon.svg"}
            alt={""}
            height={18}
            width={18}
          />{" "}
          Incoming Call - 4 Min
        </div>
        <div className="text-xs uppercase text-gray-400">
          09:27 pm <span className="capitalize">-&gt; Jeza</span>
        </div>
      </div>

      <div className="flex w-full items-center justify-center">
        <hr className="my-8 h-[1px] w-full rounded border-0 bg-gray-200 dark:bg-gray-700" />
        <div className="absolute bg-gray-50 px-4 text-xs text-gray-400 dark:bg-gray-900">
          Today
        </div>
      </div>

      <div className="mb-4 flex flex-col items-end">
			<span className="capitalize text-xs mb-2">Jeza</span>
        <div className="mb-2 w-fit rounded-md bg-green-700/10 py-2 px-4">
          Son, I&apos;ve bought the tickets
        </div>

        <div className="flex items-center gap-2 text-xs uppercase text-gray-400">
          10:42 am
          <Image
            src={"images/red-phone-icon.svg"}
            alt={""}
            height={18}
            width={18}
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2 flex w-fit items-center gap-2 rounded-md border bg-white/50 py-2 px-4">
          <Image
            src={"images/red-phone-icon.svg"}
            alt={""}
            height={18}
            width={18}
          />{" "}
          Missed Incoming Call
        </div>
        <div className="text-xs uppercase text-gray-400">
          12:31 pm <span className="capitalize">-&gt; Jeza</span>
        </div>
      </div>
    </section>
  );
}
