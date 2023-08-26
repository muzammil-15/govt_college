import React from 'react'
import FaqItem from './faqItem';

const Faq = () => {

    const faqData = [
        {
          question: 'What is the admission policy?',
          answer: 'Admission to all classes is given on the basis of seats available in each group/subject on defined merit. Minimum requirement to submit admission forms is to have minimum 45% marks in last examination. '
        },
        {
          question: 'What is the requirement for admission into HSSC-I?',
          answer: 'The applicants must be Pakistani or AJK citizens. They must have completed SSC or an equivalent examination with a minimum of 45% marks from a recognized examination board.The applicant must have passed all subjects in their SSC or equivalent examination.'
        },
        {
          question: 'What is the requirement for admission into a BS Program?',
          answer: 'The applicants must be Pakistani or AJK citizens.Must have completed HSSC or equivalent with at least 45% marks from any recognized examination board.'
        },
        {
          question: 'I am currently awaiting my SSC results. Can I apply for any HSSC Program based on my SSC-I result?',
          answer: 'Certainly! You are eligible to apply for an HSSC Program based on your SSC-I result, as long as you have obtained a minimum of 45% marks in SSC-I and have successfully passed all the subjects.'
        },
        {
          question: 'How many students are enrolled in a BS class?',
          answer: 'The number of seats in each program varies every year. It depends on the guidelines the Higher Education Commission of Pakistan provides, the number of teachers, and facilities available for a particular program.This year each program will offer admission to 30 students.'
        },
      ];

  return (
    <div className="flex flex-col md:flex-row md:items-center mb-8 my-20 py-10 bg-slate-100 px-[5%]">
      <div className="md:w-1/2 md:mr-8">
        <h2 className='subhead text-center mb-4'>FAQ&apos;s</h2> <br />
        {faqData.map((data, idx)=>(
            <FaqItem question={data.question} answer={data.answer} key={idx}/>
        ))}
        
      </div>
      <div className="md:w-1/2">
        <img src={"https://gcgilgit.edu.pk/wp-content/uploads/2020/07/DSC_0034-for-web-2.jpg"} alt={"college"} className="w-full" />
      </div>
    </div>
  )
}

export default Faq