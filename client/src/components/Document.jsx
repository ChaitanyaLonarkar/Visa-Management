import React from "react";
import { IoMdShare } from "react-icons/io";
import PaymentCard from "./PaymentCard";
export default function Document() {
  return (
    <>
      <div className="right-side w-[75%] bg-white rounded-md p-8 px-12 flex flex-col gap-8">
        <div className="head flex justify-between ">
          <h1 className="font-bold text-2xl text-slate-700">
            Documents Requirement
          </h1>
          <button className="bg-gray-200 px-5 text-slate-500 rounded font-semibold">
            Back
          </button>
        </div>
        {/* body */}
        <div className="body flex gap-7">
          {/* left */}
          <div className="doc-left w-[70%]">
            <div className="doc-left-head flex gap-4 items-center justify-between border-b-2 py-3">
              <h2 className="text-xl text-slate-700 font-semibold">
                Documents Requirement
              </h2>
              <div
                className="btns flex gap-4
              "
              >
                <button className="bg-sky-500 font-semibold hover:bg-sky-600 rounded-xl px-5 py-2 text-white ">
                  Download pdf
                </button>
                <button className=" flex items-center gap-1 border-2 font-semibold text-sky-500 border-sky-500 hover:bg-grey-200 rounded-xl px-5  ">
                  Share
                  <IoMdShare className="text-lg" />
                </button>
              </div>
            </div>

            <div className="doc-list ">
              {/* list 1 */}
              <div className="list-1 flex flex-col gap-3 my-4">
                <div className="list-heading text-xl uppercase font-semibold text-sky-500">
                  Traveller Details
                </div>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Passport
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Passport should be valid for at least 6 months from the date
                    of departure from Switzerland.
                  </li>
                  <li>
                    Handwritten passport and passports valid for more than 10
                    years are not accepted.
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Photograph
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Photo dimensions: 35mm x 45mm on matte finish paper with
                    white background.
                  </li>
                  <li>
                    Face should cover 80%, non-smiling, without glasses or head
                    covering (unless for religious or ethnic reasons), and not
                    previously used in a visa.
                  </li>
                </ul>
              </div>
              {/* list 2 */}
              <div className="list-2 flex flex-col gap-3 my-4">
                <div className="list-heading text-xl uppercase font-semibold text-sky-500">
                  Travel Details
                </div>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Flight Tickets
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>Copy of confirmed Arrival and Departure tickets</li>
                  <li>
                    Air Ticket - including internal if traveling to other
                    schengen states
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Photograph
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Copy of confirmed Hotel reservation showcasing the Hotel
                    Address, Contact Number, Applicant's Name and Dates of
                    Reservation for all days of travel.
                  </li>
                </ul>
              </div>
              {/* list 3 */}
              <div className="list-3 flex flex-col gap-3 my-4">
                <div className="list-heading text-xl uppercase font-semibold text-sky-500">
                  Financial Details
                </div>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Bank-statement
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Applicant has to present either their own bank-statement, or
                    the sponsor's statement if they are sponsored by a blood
                    relative or spouse
                  </li>
                  <li>
                    Bank statement should be for last 6 months with bank's sign
                    & seal.
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  ITR
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    If the applicant is either a Partner (or) LLP (or) Director,
                    Business ITR of last 3 years
                  </li>
                  <li>
                    3 year ITR (or) Form 16 for employed and 3 year Personal ITR
                    for self-employed.
                  </li>
                </ul>
              </div>
              {/* list 4 */}
              <div className="list-4 flex flex-col gap-3 my-4">
                <div className="list-heading text-xl uppercase font-semibold text-sky-500">
                  Occupation Details
                </div>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Employed
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Below letters from the company with the letterhead along
                    with the applicant name, designation, and signature of the
                    authorized signatory:
                  </li>
                  <li>Leave Sanction letter (or) No Objection Certificate</li>
                  <li>Payslips of last 3 months</li>
                  <li>
                    Company Appointment Letter (if applicant recently switched
                    the company)
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Self-employed
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>Cover Letter, with the business letterhead.</li>
                  <li>
                    Business registration certificate; can be any of GST
                    certificate, Certificate of Incorporation, Partnership deed,
                    MOA, etc. Add valid proprietorship proof.
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Student
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Any one of the below letter from the Institute containing
                    the applicants name:
                  </li>
                  <li>
                    Bonafide certificate (or) Leave letter from educational
                    institution (or) Student identity card copy.
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Retired
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>Retirement Proof (OR)</li>
                  <li>Pension slip for the last 3 months.</li>
                </ul>
              </div>
              {/* list 5 */}

              <div className="list-5 flex flex-col gap-3 my-4">
                <div className="list-heading text-xl uppercase font-semibold text-sky-500">
                  Additional Requirements
                </div>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Mandatory Details
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Applicants must visit the visa application center in person
                    for biometric data
                  </li>
                  <li>
                    All documents must be in English or translated officially
                  </li>
                  <li>
                    Embassy or Consulate may request additional documents or
                    personal interview on a case-by-case basis
                  </li>
                  <li>
                    Applications submitted within 15 working days of the travel
                    date will not be accepted.
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Travel Insurance
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Mandatory travel insurance with minimum coverage of Euro
                    30,000 or US Dollar 50,000 is required for health
                    emergencies, treatment, hospitalization, or repatriation.
                  </li>
                  <li>
                    It must cover all Schengen countries and be valid for the
                    entire stay.
                  </li>
                  <li>
                    Inadequate insurance may result in a shorter visa validity.
                  </li>
                  <li>
                    Carry valid Schengen travel insurance and be prepared to
                    show proof to border authorities.
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Cover letter
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Stating applicant's purpose of visit and personal details
                    addressing to the consulate (or) embassy as per
                    jurisdiction, if applicable.
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Travel agency certificate
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Duly signed and stamped by an authorized person of the
                    agency or in the case of an individual visit itinerary the
                    reservation of accommodation provided that you paid a
                    deposit or have to pay a cancellation fee.
                  </li>
                </ul>
              </div>
              {/* list 6 */}

              <div className="list-5 flex flex-col gap-3 my-4">
                <div className="list-heading text-xl uppercase font-semibold text-sky-500">
                  Conditional Requirements
                </div>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Minor Travelling with One Parent
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    For minors traveling with one parent, provide written
                    consent of the other parent or guardian, include a signed
                    copy of the other parent or guardian's passport or photo ID.
                  </li>
                  <li>
                    If a person has sole custody or guardianship of the minor,
                    provide proof.
                  </li>
                  <li>NOC from the parent if applicable.</li>
                  <li>
                    All minors must be accompanied by both parents or legal
                    guardians and sign the application form in front of a VFS
                    officer, except when the child is visiting the other parent
                    residing in Switzerland.
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Minor Travelling Alone
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    If a minor travels alone, obtain written consent from both
                    parents or legal guardians.
                  </li>
                  <li>
                    Provide signed copies of the passports or photo IDs of the
                    parents or legal guardians.
                  </li>
                  <li>NOC from the parents if applicable.</li>
                  <li>
                    All minors must be accompanied by both parents or legal
                    guardians and sign the application form in front of a VFS
                    officer, except when the child is visiting the other parent
                    residing in Switzerland.
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Staying with friends and family
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Original Invitation letter (townhall letter) in Switzerland
                    language with the signatures of the Inviting person or
                    family, issued and endorsed by the Switzerland Office of
                    Immigration and Nationality or certified by public notary.
                  </li>
                  <li>
                    Passport & Visa or residence permit of the Invitor along
                    with the address proof
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Sponsor documents
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Sponsorship letter from the sponsor stating the applicants
                    details and particulars for the trip.
                  </li>
                  <li>Employment proof of the sponsor.</li>

                <li>Bank-statement of the sponsor.</li>
                <li>
                  Government ID proof (Passport, Driving license, PAN card) of
                  the sponsor if the sponsor is from India (or) If the sponsor
                  is from Switzerland, then passport/driving license copy of the
                  sponsor
                </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Internal travel
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    If the applicant is travelling internally within the
                    schengen area, applicant has to submit internal commute
                    proof
                  </li>
                  <li>
                    Passport & Visa or residence permit of the Invitor along
                    with the address proof
                  </li>
                </ul>
                <div className="list-title font-semibold text-slate-900 text-[18px]">
                  Marriage certificate
                </div>
                <ul className=" ps-3 list-disc text-[14px] list-inside flex flex-col gap-1 text-gray-800">
                  <li>
                    Applicable, if the spouses name is not mentioned at the back
                    of the passport.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="doc-right w-[30%]">
            <PaymentCard/>

          </div>
        </div>
      </div>
    </>
  );
}
