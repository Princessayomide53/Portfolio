import React, { useRef, useEffect } from "react";
// import { useForm } from "react-hook-form";
import '../App.css';
import emailjs from "@emailjs/browser";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import EmailSent from "./EmailSent";
//  import { ToastContainer, toast } from "react-toastify";
//  import "react-toastify/dist/ReactToastify.css";


const EMAIL_REGEX =
  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;


function Modal({ open, onClose }) {
  // const notify = () => toast.success("Message sent", {
  //   position: "top-center",
  //   theme: "dark",
  // });

// const initialValues = { full_name: "", email: "", phonenumber: "", message: "" };

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [valid, setValid] = useState(null);
  const [sent, setSent] = useState(false);
  const [sentError, setSentError] = useState(false);
   const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = open ? "hidden" : "auto";

    EMAIL_REGEX.test(email) ? setValid(true) : setValid(false);
  }, [open, email]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //   const handlePhonenumber = (e) => {
  //     setPhonenumber(e.target.value);
  //   };
  //     const handleMessage = (e) => {
  //   setMessage(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTriedToSubmit(true);
    setOpenModal(true);
    if (name && email && phonenumber && message !== "") {
      if (valid === true) {
        setLoading(true);

        //emailJs
        try {
          emailjs
            .sendForm(
              "service_kcw22wo",
              "template_ww7zj4l",
              form.current,
              "D-SdUadWgzWxPHvhd"
            )
            .then(
              (result) => {
                // setTriedToSubmit(false);
                setLoading(false);
                setSent(true);
                setEmail("");
                setName("");
                setPhonenumber("");
                setMessage("");
                // setOpenModal(true);
                // notify();
                // e.target.reset("");
                // onClose();
                console.log(result.text);
              },
              (error) => {
                setLoading(false);
                console.log(error.text);
              }
            );
        } catch (error) {
          setSentError(true);
          setLoading(false);
        }
        // End emailJs
      } else {
        setLoading(false);
      }
    }
    // e.target.reset();
    // notify();
    // if(sent){
    //   toast.success("Message sent", {
    //     position: "top-center",
    //     theme: "dark",
    //   });
    // }
  };

  // const showUp = () => {
  //    if (!sent){
  //     return <EmailSent />
  //    }
  //    else {
  //      return "Message failed"
  //   }
  //  }
   

  if (!open) return null;
    return (
      <>
        <form ref={form} onSubmit={handleSubmit}>
          {!sent ? (
            <div
              class="modal"
              className="flex flex-col mt-0 justify-center z-10 items-center ml-0 fixed bg-[#2e2b2b] bg-opacity-60 inset-0 w-full h-screen"
            >
              <div className="bg-black lg:w-[70%] md:w-[80%] w-full h-screen  rounded-md">
                <div className="flex justify-end lg:mt-2 mt-1 pr-5 text-3xl z-10">
                  <button className="text-white" onClick={onClose}>
                    X
                  </button>
                </div>
                <div className="flex justify-center Form -mt-3 lg:-mt-0 md:-mt-0">
                  <div className="bg-black rounded-md w-[70%] flex flex-col justify-center items-center">
                    <div className="lg:w-[70%] w-[100%] mt-5 mb-2">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        checked
                        // required
                        placeholder="Enter Your Name*"
                        className=" border-[#80d0c7] pl-3 focus:outline-[#80d0c7] border-2 w-full h-16 rounded-md bg-black"
                      />
                      {!name && triedToSubmit ? (
                        <ErrorMessage error="Name field required" />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="lg:w-[70%] w-[100%] mt-5 mb-2">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmail}
                        // required
                        placeholder="Enter Your Email*"
                        className=" border-[#80d0c7] pl-3 focus:outline-[#80d0c7] border-2 w-full h-16 rounded-md bg-black"
                      />
                      {!email && triedToSubmit ? (
                        <ErrorMessage error="email field required" />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="lg:w-[70%] w-[100%] mt-5 mb-2">
                      <input
                        type="text"
                        id="phonenumber"
                        name="phonenumber"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                        // required
                        placeholder="Phone Number*"
                        className=" border-[#80d0c7] text-white pl-3 focus:outline-[#80d0c7] border-2 w-full h-16 rounded-md bg-black"
                      />{" "}
                      {!phonenumber && triedToSubmit ? (
                        <ErrorMessage error="PhoneNumber field required" />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="lg:w-[70%] w-[100%] mt-5 mb-2">
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        // required
                        placeholder="Your Message*"
                        className=" border-[#80d0c7] pl-3 text-white focus:outline-[#80d0c7] border-2 w-full h-36 rounded-md  bg-black"
                      ></textarea>
                      {!message && triedToSubmit ? (
                        <ErrorMessage error="Message field required" />
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="lg:mt-10 mt-5 w-[100%] text-center">
                      <button
                        type="submit"
                        onClick={() =>setOpenModal(false)}
                        // onClick={handleSubmit}
                        // onClick={notify}
                        // onClick={() => setOpenModal(true)}
                        className="text-xl bg-[#ff4b1f]  h-20 rounded-tr-md text-white w-[69%] py-4 hover:bg-[#80d0c7]"
                      >
                        Submit
                        {/* {loading ? <div className="loader"></div> : "Submit"} */}
                      </button>
                      <EmailSent
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            
            <EmailSent />
          )}
        </form>
      </>
      /* <ToastContainer /> */
    );
  };

export default Modal