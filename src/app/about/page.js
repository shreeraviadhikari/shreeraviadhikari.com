import Navbar from "@/commons/Navbar";
import SocialLinks from "@/commons/socials";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-semibold text-center mt-10">About Me</h1>
        <p className="text-3xl mt-2">Personal Info</p>
        <p className="mt-2">
          Hi, Hello and Namaste! You can call me Arvy. I'm a graduate student in
          United States with background in computer science. I have a
          undergraduate degree in Information Technology, and a graduate degree
          in Data Analytics. I have approximately six years of experience
          working with Software and Web development and additional two years
          working with Big Data technologies.
        </p>
        <p className="text-3xl mt-2">Programming</p>
        <p className="mt-2">
          I enjoy programming. Solving leetcode problems is a thrill in itself,
          but it doesnt beat the thrill of solving bugs after giving up a day
          before. My mentor often used to remind me, if you're approaching bugs
          noone has ever seen before, the bug is of a simpliest kind. So,
          rewind, pause, break and think again. Have an extra pair of eyes even
          if you wear glasses.
        </p>
        <p className="text-3xl mt-2">Deep Skills</p>
        <p className="mt-2">
          I am skilled in Python, Javascript and Java. I have experience working
          in Python/Django, Java/Spring, Javascript/Express libraries. I have
          used fair share of databases with MySQL, PostgreSQL, and T-SQL/MSSQL
          Server. I also have experience working with NoSQL document DBs such as
          MongoDB and DynamoDB.
        </p>
        <p className="text-3xl mt-2">Broad Skills</p>
        <p className="mt-2 font-semibold">
          Jack of all trades, master of none, though oftentimes better than
          master of one.
        </p>
        <p className="mt-2">
          I have experience in Data Engineering platforms (Azure, GCP, AWS),
          Machine Learning, Data Visualization, Automation, Linux Shell, piping
          (python) binaries, how virtual environments work, how git works, how
          reference and value pointers work, and what not.
        </p>
        <p className="mt-2">
          Feel free to reach out to me if you want to have a chat
        </p>
        <div className="mt-2">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
