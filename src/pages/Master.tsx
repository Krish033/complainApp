import { useForm } from "react-hook-form";
import AppBar from "../components/AppBar";

interface ComplaintForm {
  name: string;
  registerNo: string;
  pcId: string;
  batch: string;
  department: string;
  complaint: string;
}

export default function Master() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ComplaintForm>();

  const onSubmit = (data: ComplaintForm) => {
    console.log("Complaint Submitted", data);
  };

  return (
    <div>
      <div className="flex justify-start items-center w-full">
        <div className="bg-white">
          <img
            className="block mx-auto h-[34px] object-contain"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qYi3Ou4YrLzvoDJjiUHLjCmianjvx1nTvQ&s"
            alt="Profile"
          />
        </div>

        <div style={{ flex: 1 }}>
          <AppBar />
        </div>
      </div>
      <main className="bg-gray-100 px-[10em] py-5 w-full h-screen">
        <div className="bg-white shadow-md rounded-lg h-full w-full p-3">
          <h1 className="text-md font-medium">Student Complaint form</h1>
          <div className="w-full h-[95%] flex flex-col justify-between items-start">
            <div style={{ flex: "1" }}>
              <h1></h1>
            </div>
            <div className="flex w-full justify-end items-center">
              <button className="rounded-[20px] px-3 py-1.5 bg-red-300 text-[.7em] text-black font-medium hover:bg-red-500">
                <i className="fa fa-plus"></i> Create Complaint
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
