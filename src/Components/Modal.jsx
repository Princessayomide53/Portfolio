import React from "react";
// import { useForm } from "react-hook-form";
import '../App.css';




const Modal = ({ open, onClose }) => {
  if (!open) return null;

      // const initialValues = {
      //   full_name: "",
      //   email: "",
      //   phonenumber: "",
      //   message: "",
      // };

      // const [formValues, setFormValues] = useState(initialValues);
      // const [formErrors, setFormErrors] = useState({});
      // const [isSubmit, setIsSubmit] = useState(false);

      // const handleChange = (e) => {
      //   e.preventDefault();
      //   const { name, value } = e.target;
      //   setFormValues({ ...formValues, [name]: value });
      // };

      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   setFormErrors(validate(formValues));
      //   setIsSubmit(false);
      // };

      // useEffect(() => {
      //   if (Object.keys(formErrors).length === 0 && isSubmit) {
      //   }
      // }, [formErrors, isSubmit]);

      // const validate = (values) => {
      //   const errors = {};
      //   // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      //   if (!values.full_name) {
      //     errors.name = "Please enter your name!";
      //   }
      //   if (!values.email) {
      //     errors.email = "Please enter email!";
      //   }
      //    if (!values.phonenumber) {
      //      errors.message = "Please enter phonenumber!";
      //    }
      //   if (!values.message) {
      //     errors.message = "Please enter message!";
      //   }
        


      //   return errors;
      // };
  return (
    <div
      class="modal"
      className="flex flex-col mt-0 justify-center z-10 items-center ml-0 fixed bg-[#2e2b2b] bg-opacity-60 inset-0 w-full h-screen"
    >
      <div className="bg-black lg:w-[70%] md:w-[80%] w-full h-screen  rounded-md">
        <div className="flex justify-end lg:mt-5 mt-1 pr-5 text-3xl z-10">
          <button className="text-white" onClick={onClose}>
            X
          </button>
        </div>
        <div className="flex justify-center Form -mt-3 lg:-mt-0 md:-mt-0">
          <div className="bg-black rounded-md w-[70%] flex flex-col justify-center items-center">
            <form>
              <div className="lg:w-[70%] w-[100%] mt-10">
                <input
                  type="text"
                  placeholder="Enter Your Name*"
                  className=" border-[#80d0c7] pl-3 focus:outline-[#80d0c7] border-2 w-full h-16 rounded-md bg-black"
                />
              </div>

              <div className="lg:w-[70%] w-[100%] mt-10">
                <input
                  type="text"
                  placeholder="Enter Your Email*"
                  className=" border-[#80d0c7] pl-3 focus:outline-[#80d0c7] border-2 w-full h-16 rounded-md bg-black"
                />
              </div>

              <div className="lg:w-[70%] w-[100%] mt-10">
                <input
                  type="text"
                  placeholder="Phone Number*"
                  className=" border-[#80d0c7] pl-3 focus:outline-[#80d0c7] border-2 w-full h-16 rounded-md bg-black"
                />
              </div>

              <div className="lg:w-[70%] w-[100%] mt-10">
                <textarea
                  placeholder="Your Message*"
                  className=" border-[#80d0c7] pl-3 focus:outline-[#80d0c7] border-2 w-full h-36 rounded-md  bg-black
          "
                ></textarea>
              </div>

              <div className="lg:mt-10 mt-5">
                <button className="text-xl bg-[#ff4b1f] rounded-tr-md text-white px-8 py-2 hover:bg-[#80d0c7]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal