import React, { useEffect, useState } from "react";

const Form = () => {
  const [disable, setDisable] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    textarea: ''
  })
  const { name, email, textarea } = form;

  useEffect(() => {
    name !== "" && email !== "" && textarea !== "" ? setDisable(false) : setDisable(true);
  }, [form])

  const onChange = (e) => {
    setForm(prevState=> ({...prevState,[e.target.name]: e.target.value}))
  }


  return (
    <section>
      <form
        method="POST"
        action="https://formspree.io/f/myyvwokv"
        className="flex flex-col items-center justify-center w-full space-y-6">
        <div className="w-full h-14 md:max-w-md lg:max-w-lg xl:max-w-xl">
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Full name"
            className="h-full w-full outline-none focus-visible:ring-[3px] focus-visible:ring-sc_color focus:cyan hover:ring-sc_color hover:ring-2 rounded-sm bg-gray text-white caret-sc_color px-4 lg:px-6 text-base lg:text-lg placeholder-italic "
            required></input>
        </div>
        <div className="w-full h-14 md:max-w-md lg:max-w-lg xl:max-w-xl">
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="What's your @email address"
            className="h-full w-full outline-none focus-visible:ring-[3px] focus-visible:ring-sc_color focus:cyan hover:ring-sc_color hover:ring-2 rounded-sm bg-gray text-white caret-sc_color px-4 lg:px-6 text-base lg:text-lg placeholder-italic"
            required></input>
        </div>
        <div className="w-full h-36 md:max-w-md lg:max-w-lg xl:max-w-xl">
          <textarea
            type="text"
            name="textarea"
            value={textarea}
            onChange={onChange}
            placeholder="What do you have for me?"
            className="h-full w-full outline-none focus-visible:ring-[3px] focus-visible:ring-sc_color  hover:ring-sc_color hover:ring-2 rounded-sm bg-gray text-white caret-sc_color px-4 lg:px-6 text-base lg:text-lg py-3 placeholder-italic resize-none"
            required></textarea>
        </div>
        <div className="w-full h-14 md:max-w-md lg:max-w-lg xl:max-w-xl">
          <button
            type="submit"
            title={disable && ' Please fill out the form'}
            aria-label="send me the email"
            disabled={disable}
            className={`w-full h-full duration-500 rounded-md outline-none focus-visible:ring-4 focus-visible:bg-cyan ${disable ? 'bg-text_Light' : 'active '} btn`}
            required>
            Get in touch
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
