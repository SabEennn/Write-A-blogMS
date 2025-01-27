import React, { useState } from "react";

const Form = ({ type }) => {
  const [data,setData] = useState({
  title : '',
  description : ''
  })

  const handleChange = () =>{
    const {name, value} = e.target;

    setData({
      ...data,
      [name] : name === 'image' ? e.target.files[0] : value
    })
  
  }
  return (
    <div className="form-wrapper flex flex-col justify-center items-center ">
      <p className="text-3xl pt-5">{type} a blog.</p>
      <form className="m-10 border-2 p-10 flex flex-col w-1/2">
        <div className="py-5">
          <h1 className="text-xl"> Title first..</h1>
        </div>

        <div className="title-wrapper">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <textarea
            id="message"
            rows="4"
            name="title"
            className="bg-slate-100 focus:bg-transparent focus:outline-none block p-2.5 w-full text-lg text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none"
            placeholder="Title here..."
          ></textarea>
        </div>

        <div className="desc-wrapper py-10">
          <h1 className="text-xl py-5"> Describe or elaborate your thought </h1>

          <div className="w-full mb-4 border-none border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            
            <div className=" py-2 bg-white rounded-b-lg dark:bg-gray-800">
              <label for="editor" className="sr-only">
                Publish post
              </label>
              <textarea
                id="editor"
                rows="8"
                name="description"
                className="bg-slate-100 focus:outline-none focus:bg-transparent  w-full p-5 text-lg text-gray-800  border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write an article..."
                required
              ></textarea>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 w-fit"
        >
          Publish post
        </button>
      </form>
    </div>
  );
};

export default Form;
