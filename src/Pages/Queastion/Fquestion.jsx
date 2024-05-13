
const Fquestion = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <div className="">
                        <h2 className="text-2xl text-center font-semibold sm:text-4xl text-[#0077B5]">Frequently Asked Questions</h2>
                        <p className="mt-4 text-center mb-8 dark:text-sky-950">Frequently Asked Questions (FAQ) is a concise resource providing answers to common queries, <br /> enhancing user experience and streamlining communication.</p>
                    </div>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-sky-950">How can I post a job listing on the website?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-sky-950">To post a job listing, you need to first create an account or log in if you already have one. Once logged in, navigate to the "Add A Job" page, fill out the required information about the job, including the job title, description, category, salary range, posting date, and application deadline, and then submit the job listing. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-sky-950">Can I search for specific types of jobs on the website?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-sky-950">Yes, you can search for specific types of jobs by using the job category tabs available on the homepage. These tabs allow you to filter job listings based on categories such as "On-Site Job," "Remote Job," "Hybrid," and "Part-Time." Additionally, there is a search feature available on the "All Jobs" page where you can search for jobs by their titles.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-sky-950">How do I apply for a job listed on the website?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-sky-950">To apply for a job listed on the website, click on the "View Details" button of the job listing you are interested in. This will take you to the job details page where you can find more information about the job. If you meet the requirements and wish to apply, click on the "Apply" button, fill out the required information, such as your name, email, and resume link, and submit your application. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-sky-950">What happens after I submit a job application?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-sky-950">After you submit a job application, it will be saved in our database, and the number of applicants for that job listing will be updated accordingly. The employer will review your application, and if you meet the criteria, they may contact you for further steps in the hiring process.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-sky-950">Can I update or delete a job listing that I posted?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-sky-950">Yes, if you have posted a job listing and need to update or delete it, you can do so from the "My Jobs" page. This page displays all the job listings you have posted, and each listing will have options to update or delete it. Simply click on the corresponding button to make changes to your job listing as needed.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-sky-950">Is there a feature to track the jobs I have applied for?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-sky-950">Yes, you can track the jobs you have applied for by visiting the "Applied Jobs" page. This page displays a list of all the jobs you have applied for, allowing you to keep track of your applications and follow up on them if needed. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-sky-950">What should I do if I encounter any issues or have further questions?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-sky-950">If you encounter any issues while using the website or have further questions that are not addressed in the FAQs, please feel free to contact our support team. You can reach out to us through the contact information provided in the footer of the website, and our team will be happy to assist you.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Fquestion;