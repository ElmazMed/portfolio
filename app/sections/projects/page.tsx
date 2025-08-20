import Image from "next/image";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CodeIcon from "@mui/icons-material/Code";
import project1 from "@/app/assets/project-1.png";
import project2 from "@/app/assets/project-2.png";
import project3 from "@/app/assets/project-3.png";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="md:mt-48 mt-28">
      <h1 className="text-white md:text-5xl mb-20 text-3xl font-extrabold opacity-80 text-center">
        <AutoFixHighIcon style={{ fontSize: "40px" }} /> Projects
      </h1>
      <div className="flex gap-6">
        <div className="flex flex-col w-60 gap-4 relative bg-primary p-5 border mb-10 border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd] rounded-xl">
          <div className="relative group h-[6.2rem]">
            <div
              className={`bg-black absolute w-full h-full cursor-pointer opacity-20 group-hover:opacity-65`}></div>
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition ease-in-out duration-1000 opacity-0 group-hover:opacity-100`}>
              <Link
                href="https://elmazgour-store.netlify.app/"
                target="_blank"
                className="mr-2 text-3xl">
                <VisibilityIcon
                  style={{ color: "white", fontSize: "2.5rem" }}
                />
              </Link>
              <Link
                href="https://elmazgour-store.netlify.app/"
                target="_blank"
                className="ml-2 text-3xl">
                <CodeIcon style={{ color: "white", fontSize: "2.5rem" }} />
              </Link>
            </div>
            <Image src={project1} alt="Front-end store image" />
          </div>

          <p className="text-white opacity-80 text-sm ">
            Built a responsive online store using React, Redux, and Material-UI,
            featuring multiple pages for products, cart, and checkout.
            Implemented global state management with Redux for seamless shopping
            cart updates and product filtering. Designed a clean, modern UI with
            Material-UI components and deployed the application on Netlify for
            fast, reliable hosting.
          </p>
        </div>
        <div className="flex flex-col w-60 gap-4 relative bg-primary p-5 border mb-10 border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd] rounded-xl">
          <div className="relative group h-[6.2rem]">
            <div
              className={`bg-black absolute w-full h-full cursor-pointer opacity-20 group-hover:opacity-65`}></div>
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition ease-in-out duration-1000 opacity-0 group-hover:opacity-100`}>
              <Link
                href="https://elmazgour-store.netlify.app/"
                target="_blank"
                className="mr-2 text-3xl">
                <VisibilityIcon
                  style={{ color: "white", fontSize: "2.5rem" }}
                />
              </Link>
              <Link
                href="https://elmazgour-store.netlify.app/"
                target="_blank"
                className="ml-2 text-3xl">
                <CodeIcon style={{ color: "white", fontSize: "2.5rem" }} />
              </Link>
            </div>
            <Image
              src={project2}
              alt="Front-end store image"
              style={{ height: "100%" }}
            />
          </div>

          <p className="text-white opacity-80 text-sm">
            A fully responsive web application built with React.js, Redux, and
            Material UI that provides real-time weather information for a
            moroccan city using the OWM API. The app features multilingual
            support through react-i18next, enabling users to seamlessly switch
            between English and Arabic. It offers a clean, user-friendly
            interface with dynamic data updates and ensures an optimal
            experience across all devices.
          </p>
        </div>
        <div className="flex flex-col w-60 gap-4 relative bg-primary p-5 border mb-10 border-secondary transition ease-in-out duration-800 hover:shadow-[0px_11px_29px_-19px_#2ee2cd] rounded-xl">
          <div className="relative group h-[6.2rem]">
            <div
              className={`bg-black absolute w-full h-full cursor-pointer opacity-20 group-hover:opacity-65`}></div>
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition ease-in-out duration-1000 opacity-0 group-hover:opacity-100`}>
              <Link
                href="https://elmazgour-store.netlify.app/"
                target="_blank"
                className="mr-2 text-3xl">
                <VisibilityIcon
                  style={{ color: "white", fontSize: "2.5rem" }}
                />
              </Link>
              <Link
                href="https://elmazgour-store.netlify.app/"
                target="_blank"
                className="ml-2 text-3xl">
                <CodeIcon style={{ color: "white", fontSize: "2.5rem" }} />
              </Link>
            </div>
            <Image
              src={project3}
              alt="Front-end store image"
              style={{ height: "100%" }}
            />
          </div>

          <p className="text-white opacity-80 text-sm ">
            A task management application built with React.js, Redux, and
            Material UI that allows users to add, edit, remove, and mark tasks
            as completed. Tasks are organized into three sections All Tasks,
            Completed, and Uncompleted providing a clear and intuitive way to
            manage daily activities. The app features a responsive,
            user-friendly interface for seamless task tracking across devices.
          </p>
        </div>
      </div>
    </div>
  );
}
