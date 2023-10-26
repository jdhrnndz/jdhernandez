'use client'

import FlashyButton from "@components/FlashyButton";
import { MyMagicString } from "@components/enums";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert('Your message has been sent!');
        myForm.reset();
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="flex flex-col mx-auto h-full justify-center w-8/12 gap-4">
      <div className="bg-zinc-50 text-stone-700 font-[Urbanist] outline outline-2 outline-celadon-green/30 selection:bg-asda-green/50">
        <hgroup className="relative bg-celadon-green w-fit h-fit px-8 py-4 after:bg-celadon-green after:skew after:h-full after:absolute after:w-12 after:-top-0 after:-right-2 after:shadow-stripes z-0 after:-z-[1]">
          <header className="text-2xl text-white font-bold tracking-wide">
            Send me a message!
          </header>
        </hgroup>
        <form name="contact" data-netlify="true" netlify="true" className="flex flex-wrap flex-row gap-4 p-8 max-h-full" onSubmit={handleSubmit}>
          <input type="hidden" required name="form-name" value="contact" />
          <input name="name" required type="text" placeholder="John Doe" className="form-input focus:border-asda-green basis-1/2-gap-4 border-transparent outline outline-2 outline-celadon-green/30 shadow-inner bg-celadon-green/10"/>
          <input name="email" required type="email" placeholder="johndoe@mail.com" className="form-input focus:border-asda-green basis-1/2-gap-4 border-transparent outline outline-2 outline-celadon-green/30 shadow-inner bg-celadon-green/10"/>
          <textarea name="message" required placeholder="What's on your mind?" rows="5" className="form-textarea focus:border-asda-green resize-none basis-full col-span-2 border-transparent outline outline-2 outline-celadon-green/30 shadow-inner bg-celadon-green/10"/>
          <div className="mx-auto">
            <FlashyButton type={MyMagicString.Submit}>
              Send
            </FlashyButton>
          </div>
        </form>
      </div>
    </div>
  );
}
