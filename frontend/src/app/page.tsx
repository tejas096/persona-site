import { AlertTriangle, Mail } from "lucide-react";
const Home = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center border border-[#833BE8]/20 bg-[rgb(16,17,18)] p-6">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#833BE8]/15">
          <AlertTriangle className="h-8 w-8 text-[#833BE8]" />
        </div>

        <h2 className="mb-3 text-3xl font-semibold text-white">
          Website Unavailable
        </h2>

        <p className="mb-6 leading-7 text-[rgb(190,190,190)]">
          This project is currently unavailable due to some unexpected bugs.
          We're actively working on fixing the issues and restoring the website
          as soon as possible.
        </p>

        <div className="rounded-lg border border-[#833BE8]/20 bg-[#833BE8]/10 p-4">
          <p className="text-sm text-[rgb(217,217,217)]">
            If you'd like a demo or more information about this project, please
            contact the owner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
