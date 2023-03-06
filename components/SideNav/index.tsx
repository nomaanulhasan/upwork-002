import Image from "next/image";
import styles from "@/styles/SideNav.module.css";

export default function SideNav() {
  return (
    <aside
      className="
        flex w-[100px] flex-col items-center
        justify-between border-r border-gray-100 py-6
      "
    >
      <header
        className="
          flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl
          transition-all hover:bg-gray-200 text-3xl
        "
      >
        &lt;-
      </header>
      <nav className="flex flex-col items-center justify-between">
        <ul>
          {[1, 2, 3, 4, 5, 6].map((c) => (
            <li
              key={c}
              className={`
              ${c === 1 ? "bg-teal-700/30 shadow-md shadow-gray-400" : ""} 
              mb-2 flex h-12 w-12 cursor-pointer items-center justify-center
              rounded-2xl shadow-gray-400 transition-all
              hover:bg-teal-700/30 hover:shadow-md
            `}
            >
              <Image
                src={"images/phone-icon.svg"}
                alt={c.toString()}
                height={24}
                width={24}
              />
            </li>
          ))}
        </ul>
      </nav>
      <footer>
        <button
          className="
            h-10 w-10 rounded-full bg-gray-200 transition-all hover:bg-gray-300
          "
        />
      </footer>
    </aside>
  );
}
