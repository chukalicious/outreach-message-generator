import { useState } from "react";
const FinishedMessage = (props) => {
  console.log("FinishedMessage: props: ", props);

  const { blanks } = props;

  return (
    <div className="flex flex-col w-full mx-auto mt-8">
      <div className="w-full bg-base-100 mx-auto">
        <h1 className="text-3xl p-4 text-center">Here's your message!</h1>
        <button className="btn btn-secondary flex mx-auto">
          Copy your message!
        </button>
        <form>
          <div className="px-4 py-5">
            <h3 className="text-xl py-4 leading-8">
              RE: I think I’m your team’s next {blanks.jobTitle}!
            </h3>
            <p className="py-4">Hi, {blanks.contactName}</p>
            <p className="py-4">
              I'm Katiuska Alicea de Leon, nice to “virtually” meet you!
            </p>
            <p className="py-4 leading-10">
              I’m fascinated by the problems the {blanks.jobDepartment} team is
              solving at {blanks.companyName}— as soon as I saw that you are
              looking for someone that both {blanks.goodFit1} and{" "}
              {blanks.goodFit2}, I had to reach out!
            </p>
            <p className="py-4 leading-10">
              To cut directly to the chase, I really think I am your team’s next{" "}
              {blanks.jobTitle}. I bring a strong background in {blanks.skill1},{" "}
              {blanks.skill2}, and {blanks.skill3} to the table, as well as
              experience developing in agile methodology on fully remote teams.
              I applied directly through your site, but am attaching my resume
              to this email as well for reference.
            </p>
            <p className="py-4 leading-10">
              I would love a chance to chat more about this team and what you
              are looking for in your next hire. Are you free for a quick phone
              call this week, maybe {blanks.dayToMeet}?
            </p>
            <p className="py-4">All the best, </p>
            <p>Katiuska Alicea de Leon</p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FinishedMessage;
