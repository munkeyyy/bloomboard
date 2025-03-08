import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { FiChevronsRight, FiPlus } from "react-icons/fi";
import { HiArrowCircleUp } from "react-icons/hi";

// import { Link } from "react-router-dom";

const Create = () => {
  const widthRef = useRef(null);
  const [barWidth, setBarWidth] = useState<number>(5);
  const [isDisabled, setIsDisable] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string>("");

  const handleWidth = () => {
    if (widthRef?.current) {
      // Toggle between 5% and 20% width
      const newWidth = barWidth === 5 ? 20 : 5;
      (widthRef.current as HTMLElement).style.width = `${newWidth}%`;
      setBarWidth(newWidth);
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target?.result as string);
      };
      reader.readAsDataURL(file);
      setIsDisable(false);
    }
  };



  interface FormValues {
    title: string;
    description: string;
    link: string;
    board: string;
  }

  const formValidate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.description) {
      errors.description = "Required";
    } else if (values.description.length < 10) {
      errors.description = "Description should be more than 10 letters";
    }

    if (!values.link) {
      errors.link = "Required";
    }

    return errors;
  };

  return (
    <div className="flex items-start border-t border-[#C1FF00] h-full">
      <div ref={widthRef} className="h-full border-r border-[#C1FF00] w-[5%] ">
        <div className="flex flex-col justify-center items-end gap-10 px-6 py-8 border-b border-[#C1FF00] h-full sticky top-[91px] ">
          <button
            onClick={handleWidth}
            className="text-3xl p-2 rounded-full text-[#C1FF00] border border-[#C1FF00] "
          >
            <FiChevronsRight />
          </button>
          {barWidth === 5 ? (
            <button className="text-3xl font-medium text-[#C1FF00] p-2 rounded-full border border-[#C1FF00] ">
              <FiPlus />
            </button>
          ) : (
            barWidth === 20 && (
              <button className="self-center text-black bg-[#C1FF00] py-3 px-5 w-full rounded-full font-semibold">
                Create New Bloom
              </button>
            )
          )}
        </div>
        <div className="flex flex-col gap-10 w-full">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
      <div className="flex-1 h-full  ">
        <div className="p-8 border-[#C1FF00] border-b sticky flex items-center justify-between top-[91px] z-10 bg-[#C1FF00] ">
          <p className="text-black font-semibold text-xl">Create Bloom</p>
          {!isDisabled && (
            <button
              type="submit"
              className=" text-white bg-[black] py-3 px-6  rounded-full font-semibold"
            >
              Publish
            </button>
          )}
        </div>
        <div className="max-w-[1400px] h-full">
          <div className="flex items-start justify-center gap-6 py-16">
            <div>
              {imageSrc ? (
                <div className="h-[auto] overflow-hidden bg-[#C1FF00] w-[350px] rounded-3xl  relative  flex items-center justify-center  ">
                  <img
                    src={imageSrc}
                    alt=""
                    className="h-fit w-fit object-cover"
                  />
                </div>
              ) : (
                <div className="h-[400px] bg-[#33333333]  w-[350px] rounded-3xl border-2 relative  flex items-center justify-center border-dashed border-[#C1FF00]">
                  <input
                    type="file"
                    name=""
                    onChange={(e) => handleUpload(e)}
                    className="opacity-0 relative z-2 h-full w-full"
                    id=""
                  />
                  <div className="flex items-center flex-col gap-3 h-full w-full absolute top-[40%] z-[1] left-0 pointer-events-none">
                    <div className="text-white text-4xl">
                      <HiArrowCircleUp />
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="text-white text-base font-thin w-[80%] text-center">
                        Choose a file or drag and drop here
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-[40%] relative ">
              {isDisabled && (
                <div className="h-[100%] ml-8 cursor-not-allowed  opacity-[.6] top-0 w-full absolute "></div>
              )}
              <Formik
                enableReinitialize
                initialValues={{
                  title: "",
                  description: "",
                  link: "",
                  board: "",
            
                }}
                validate={formValidate}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  // isSubmitting,
                  /* and other goodies */
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="flex  flex-col gap-3 w-full ml-8"
                  >
                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="title" className="text-white text-xs">
                        {" "}
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        placeholder="Add Title"
                        className="bg-transparent w-full p-3 border-2 border-[#46464622] rounded-2xl text-"
                      />
                      <p className="self-center text-red-600">
                        {errors.title && touched.title && errors.title}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        htmlFor="description"
                        className="text-white text-xs"
                      >
                        {" "}
                        Description
                      </label>

                      <textarea
                        placeholder="Add Description"
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="bg-transparent w-full p-3 border-2 border-[#46464622] rounded-2xl text-"
                        value={values.description}
                      />
                      <p className="self-center text-red-600">
                        {errors.description &&
                          touched.description &&
                          errors.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="link" className="text-white text-xs">
                        {" "}
                        Link
                      </label>
                      <input
                        type="text"
                        name="link"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.link}
                        placeholder="Add link"
                        className="bg-transparent w-full p-3 border-2 border-[#46464622] rounded-2xl text-"
                      />
                      <p className="self-center text-red-600">
                        {errors.link && touched.link && errors.link}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="board" className="text-white text-xs">
                        {" "}
                        Board
                      </label>
                      <input
                        type="text"
                        name="board"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.board}
                        placeholder="Add board"
                        className="bg-transparent w-full p-3 border-2 border-[#46464622] rounded-2xl text-"
                      />
                      <p className="self-center text-red-600">
                        {errors.board && touched.board && errors.board}
                      </p>
                    </div>

                   
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
