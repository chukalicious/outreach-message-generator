import { useState } from "react";

import { clearForm } from "../../../helpers/clearForm";
import { initialState } from "./HiringManagerContainer";

const HiringManager = (props) => {
  console.log("HiringManager: props: ", props);
  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    props.collectValues(input);
    clearForm(setInput, initialState);
  };
  console.log("HiringManager: input: ", input);
  return (
    <div className="flex flex-col w-[75%] mx-auto">
      <h1 className="text-3xl p-4">
        Fill in the blanks and click on generate to create your message:
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="px-4 py-5">
          <h3 className="text-xl py-4 leading-8">
            SUBJECT: I think I’m your team’s next{" "}
            <input
              type="text"
              name="jobTitle"
              onChange={handleChange}
              value={input.jobTitle}
              placeholder="Job Title"
              className="input w-full max-w-xs input-primary input-sm"
            />
            !
          </h3>
          <p className="py-4">
            Hi,{" "}
            <input
              type="text"
              placeholder="Contact Name"
              value={input.contactName}
              name="contactName"
              onChange={handleChange}
              className="input w-full max-w-xs input-primary input-sm"
            />{" "}
          </p>
          <p className="py-4">
            I'm Katiuska Alicea de Leon, nice to “virtually” meet you!
          </p>
          <p className="py-4 leading-10">
            I’m fascinated by the problems the{" "}
            <input
              type="text"
              name="jobDepartment"
              value={input.jobDepartment}
              onChange={handleChange}
              placeholder="Job Department name"
              className="input w-full max-w-xs input-sm input-primary"
            />{" "}
            team is solving at{" "}
            <input
              type="text"
              name="companyName"
              value={input.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="input w-full max-w-xs input-primary input-sm"
            />{" "}
            — as soon as I saw that you are looking for someone that both{" "}
            <input
              type="text"
              name="goodFit1"
              value={input.goodFit1}
              onChange={handleChange}
              placeholder="Good Fit #1"
              className="input w-full max-w-xs input-primary input-sm"
            />{" "}
            and{" "}
            <input
              type="text"
              name="goodFit2"
              value={input.goodFit2}
              onChange={handleChange}
              placeholder="Good Fit #2"
              className="input w-full max-w-xs input-primary input-sm"
            />
            , I had to reach out!
          </p>
          <p className="py-4 leading-10">
            To cut directly to the chase, I really think I am your team’s next{" "}
            {input.jobTitle}. I bring a strong background in{" "}
            <input
              type="text"
              name="skill1"
              value={input.skill1}
              onChange={handleChange}
              placeholder="Tech Skill #1"
              className="input input-bordered input-primary w-full input-sm max-w-xs"
            />
            ,{" "}
            <input
              type="text"
              name="skill2"
              value={input.skill2}
              onChange={handleChange}
              placeholder="Tech Skill #2"
              className="input input-bordered input-primary input-sm w-full max-w-xs"
            />
            , and{" "}
            <input
              type="text"
              name="skill3"
              value={input.skill3}
              onChange={handleChange}
              placeholder="Tech Skill #3"
              className="input input-bordered input-primary input-sm w-full max-w-xs"
            />{" "}
            to the table, as well as experience developing in agile methodology
            on fully remote teams. I applied directly through your site, but am
            attaching my resume to this email as well for reference.
          </p>
          <p className="py-4 leading-10">
            I would love a chance to chat more about this team and what you are
            looking for in your next hire. Are you free for a quick phone call
            this week, maybe{" "}
            <input
              type="text"
              name="dayToMeet"
              value={input.dayToMeet}
              onChange={handleChange}
              placeholder="Enter a day here"
              className="input input-bordered input-primary input-sm w-full max-w-xs"
            />
            ?
          </p>
          <p className="py-4">All the best, </p>
          <p>Katiuska Alicea de Leon</p>
        </div>
        <button className="flex btn btn-primary mx-auto">Generate!</button>
      </form>
    </div>
  );
};

export default HiringManager;
