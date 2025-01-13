import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { FiChevronsRight, FiPlus } from "react-icons/fi";
import { HiArrowCircleUp } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
// import { Link } from "react-router-dom";

const Create = () => {
  const widthRef = useRef(null);
  const [barWidth, setBarWidth] = useState<number>(5);
  const [isDisabled, setIsDisable] = useState<boolean>(true);
  const [taggedTopics, setTaggedTopics] = useState<string[]>([]);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string[]>([]);
  const topics = [
    [
      "anime",
      "almond nails",
      "acrylic nails",
      "airport outfit",
      "a line dress",
      "attack o titan",
      "anime drawing",
      "angel",
      "asian beauty",
      "adidas",
      "acrylic painting",
      "allah",
      "anime girls",
      "nail art",
      "abstract painting",
      "aura",
    ],
    [
      "black",
      "birthday cake",
      "bts",
      "braids",
      "bedroom",
      "blue",
      "blue nails",
      "baech outfit",
      "bmw",
      "black nails",
      "butterfly",
      "butterfly  tattoo",
      "birthday",
      "batman",
      "bathroom",
      "bangs",
      "brownhair",
    ],
    [
      "Cat",
      "Color",
      "Curly Hairstyles",
      "Christmas",
      "Chicken Recipes",
      "Cute Hairstyles",
      "Character Design",
      "Cake",
      "Chicken Breast Recipes",
      "Crochet",
      "Clothes",
      "Coffee",
      "Color Palette",
      "Chicken",
      "Chocolate Chip Cookies",
      "Concert Outfit",
      "Coloring Pages",
      "Cookies",
      "Christmas Cookies",
    ],
    [
      "Drawing Ideas",
      "Dinner Party",
      "Dinner Recipes",
      "Disney Princess",
      "Doodles",
      "Desktop Wallpaper",
      "Date Night Outfit",
      "Dogs",
      "Deadpool",
      "Dragon Tattoo",
      "Dior",
      "Draco Malfoy",
    ],
    [
      "Engagement Rings",
      "Eye Makeup",
      "Engagement Photos",
      "Easy Hairstyles",
      "Embroidery",
      "Easter",
      "Easy Meals",
      "Eyeliner",
      "Eye Drawing",
      "Easter Nails",
      "Eyeshadow Looks",
      "Easy Snacks",
      "Enchiladas",
      "Eyelash Extensions",
      "Elephant",
      "Electric Guitar",
      "Eyebrows",
      "Emo Makeup",
    ],
    [
      "Flowers",
      "Fall Nails",
      "French Nails",
      "Funny",
      "Flower Drawing",
      "Friendship Quotes",
      "Funny Quotes",
      "Food Porn",
      "Fish",
      "Funky Nails",
      "Forest",
      "Fox",
      "Frame",
      "Fruit Salad",
      "Fried Rice",
      "Face Drawing",
      "Frog",
      "Ferrari",
    ],
    [
      "Good Morning Quotes",
      "Goddess Braids",
      "Gel Nails",
      "Gym",
      "Green",
      "Green Nails",
      "GIF",
      "Gyaru",
      "Graphic Design",
      "Golden Retriever",
      "Graduation Dress",
      "Gym Outfit",
      "Guitar",
      "Gold Nails",
      "Graffiti",
      "Garden Ideas",
    ],
  ];
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

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (!value) {
      setSelectedTopic([]); // Clear selection if input is empty
      return;
    }
  
    const matchingTopicArrays = topics.filter((topicArray) =>
      topicArray.some((topic) => 
        topic.toLowerCase().includes(value.toLowerCase())
      )
    );
  
    // If you want to combine all matching arrays into one
    const allMatchingTopics = matchingTopicArrays.flat();
    
    // Or if you want to keep them as separate arrays
    setSelectedTopic(allMatchingTopics); // or setSelectedTopic(matchingTopicArrays);
  };

  interface FormValues {
    title: string;
    description: string;
    link: string;
    board: string;
    topics: string[];
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
    <div className="flex items-start border-t border-[#aeabab88] h-full">
      <div ref={widthRef} className="h-full border-r w-[5%] ">
        <div className="flex flex-col justify-center items-end gap-10 px-6 py-8 border-b border-[#aeabab88] h-full sticky top-[91px] ">
          <button
            onClick={handleWidth}
            className="text-3xl p-2 rounded-full hover:bg-gray-200 font-black text-black"
          >
            <FiChevronsRight />
          </button>
          {barWidth === 5 ? (
            <button className="text-3xl font-medium text-gray-400 p-2 rounded-full bg-gray-200">
              <FiPlus />
            </button>
          ) : (
            barWidth === 20 && (
              <button className="self-center text-black bg-gray-200 py-3 px-5 w-full rounded-full font-semibold">
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
        <div className="p-8 border-[#aeabab88] border-b sticky flex items-center justify-between top-[91px] z-10 bg-[#f5f5f5] ">
          <p className="text-black font-semibold text-xl">Create Bloom</p>
          {!isDisabled && (
            <button
              type="submit"
              className=" text-white bg-red-500 py-3 px-6  rounded-full font-semibold"
            >
              Publish
            </button>
          )}
        </div>
        <div className="max-w-[1400px] h-full">
          <div className="flex items-start justify-center gap-6 py-16">
            <div>
              {imageSrc ? (
                <div className="h-[auto] overflow-hidden bg-gray-200 w-[350px] rounded-3xl border-2 relative  flex items-center justify-center  border-gray-300">
                  <img
                    src={imageSrc}
                    alt=""
                    className="h-fit w-fit object-cover"
                  />
                </div>
              ) : (
                <div className="h-[400px]  bg-gray-200 w-[350px] rounded-3xl border-2 relative  flex items-center justify-center border-dashed border-gray-300">
                  <input
                    type="file"
                    name=""
                    onChange={(e) => handleUpload(e)}
                    className="opacity-0 relative z-2 h-full w-full"
                    id=""
                  />
                  <div className="flex items-center flex-col gap-3 h-full w-full absolute top-[40%] z-[1] left-0 pointer-events-none">
                    <div className="text-black text-4xl">
                      <HiArrowCircleUp />
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="text-black text-base font-thin w-[80%] text-center">
                        Choose a file or drag and drop here
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-[40%] relative ">
              {isDisabled && (
                <div className="h-[100%] ml-8 cursor-not-allowed bg-[#f7f7f7] opacity-[.6] top-0 w-full absolute "></div>
              )}
              <Formik
                enableReinitialize
                initialValues={{
                  title: "",
                  description: "",
                  link: "",
                  board: "",
                  topics: taggedTopics,
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
                      <label htmlFor="title" className="text-black text-xs">
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
                        className="bg-transparent w-full p-3 border-2 border-gray-200 rounded-2xl text-black"
                      />
                      <p className="self-center text-red-600">
                        {errors.title && touched.title && errors.title}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        htmlFor="description"
                        className="text-black text-xs"
                      >
                        {" "}
                        Description
                      </label>

                      <textarea
                        placeholder="Add Description"
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="bg-transparent w-full p-3 border-2 border-gray-200 rounded-2xl text-black"
                        value={values.description}
                      />
                      <p className="self-center text-red-600">
                        {errors.description &&
                          touched.description &&
                          errors.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="link" className="text-black text-xs">
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
                        className="bg-transparent w-full p-3 border-2 border-gray-200 rounded-2xl text-black"
                      />
                      <p className="self-center text-red-600">
                        {errors.link && touched.link && errors.link}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="board" className="text-black text-xs">
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
                        className="bg-transparent w-full p-3 border-2 border-gray-200 rounded-2xl text-black"
                      />
                      <p className="self-center text-red-600">
                        {errors.board && touched.board && errors.board}
                      </p>
                    </div>

                    <div
                      className={`flex flex-col gap-2 w-full ${
                        !isDisabled && "relative"
                      }`}
                    >
                      {selectedTopic.length > 0 && (
                        <div className="rounded-2xl p-2 w-full absolute z-[1] bg-white top-[-225px]">
                          <span className="text-gray-300 text-xs">{`matched tags (${selectedTopic.length})`}</span>
                          <div className="mt-2 w-full h-[200px] overflow-y-auto">
                            {selectedTopic.map((t: string, i: number) => (
                              !taggedTopics.includes(t)&&(<div
                                onClick={() =>
                                  setTaggedTopics([...taggedTopics, t])
                                }
                                key={i}
                                className="w-full text-black my-2"
                              >
                                {t}
                              </div>)
                            ))}
                          </div>
                        </div>
                      )}
                      <label htmlFor="topics" className="text-black text-xs">
                        {" "}
                        topics
                      </label>
                      <input
                        type="text"
                        name="topics"
                        onChange={(e) => handleTopicChange(e)}
                        onBlur={handleBlur}
                        value={values.topics}
                        placeholder="Add topics "
                        className={`bg-transparent w-full p-3 border-2 border-gray-200 rounded-2xl text-black ${
                          !isDisabled && "relative z-[2]"
                        } `}
                      />
                      {taggedTopics.length > 0 && (
                        <div className="flex items-center gap-4 flex-wrap">
                          {taggedTopics &&
                            taggedTopics.map((tag, i) => (
                              <div
                                key={i}
                                className="py-3 px-5 bg-black text-white rounded-full flex items-center gap-3 justify-between"
                              >
                                <span>{tag}</span>
                                <button
                                  type="button"
                                  onClick={()=>{
                                    const updatedTags= taggedTopics.filter((t)=>t!==tag)
                                    setTaggedTopics(updatedTags)
                                  }}
                                  className="text-white text-lg"
                                >
                                  <IoClose />
                                </button>
                              </div>
                            ))}
                        </div>
                      )}
                      <p className="self-center text-red-600">
                        {errors.topics && touched.topics && errors.topics}
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
