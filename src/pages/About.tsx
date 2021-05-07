import JobContainer from '../components/JobContainer';

const jobs = [
    {
        company: "UPS",
        title: "DevOps Engineer Intern",
        date: "Summer 2020"
    },
    {
        company: "Purdue University",
        title: "TensorFlow Model Developer",
        date: "2019-2021"
    },
    {
        company: "Amazon",
        title: "Software Engineering Intern",
        date: "Summer 2021"
    }
];

function About() {
    return (
        <JobContainer jobs={jobs}/>
    );
};

export default About;