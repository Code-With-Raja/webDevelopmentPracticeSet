import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function NewRequition() {
    const navigate = useNavigate();




    return (
        <div>
            <div className='p-[.5rem]'>
                <header class="flex flex-wrap">
                    <img src="/public/HeaderIMG.jpg" alt="Hearder Image" class="flex flex-wrap w-full " />
                </header>
                <div class="flex flex-wrap flex-auto border-[.18rem] border-blue-500 mt-[.5rem] rounded-md  ">
                    <div class="flex flex-wrap bg-blue-900 h-[2.5rem] w-full justify-center items-center text-white font-bold text-[1.5rem] ">
                        e-Requisition form Filling
                    </div>
                    <div class="flex flex-wrap border-[.18rem] border-blue-500  m-[1.5rem] rounded-md ">
                        <div class="flex flex-wrap bg-blue-200 h-[2.5rem] w-full items-center text-white font-bold text-[1.2rem]">
                            <p className='flex flex-wrap ml-[1rem] text-blue-800 '>Please read the following instruction carefully before proceeding further </p>
                        </div>
                        <div class="flex flex-wrap overflow-hidden m-[1.5rem] ">
                            <ol className='flex flex-wrap gap-[1rem] '>
                                <li className='w-full'> 1. Web-based e-Assessment, if generated, will be provisional one and subject to final verification
                                    by Registering Officer where the deed will be registered.</li>
                            
                                <li className='w-full'> 2. e-Assessment generated is valid for 30 days only from the date of generation.</li>
                                <li className='w-full'> 3. If there is any technical problem to print e-Assessment slip during filling of e-Requisition
                                    Form then please visit wbregistration.gov.in to reprint e-Assessment Slip.</li>
                                <li className='w-full'> 4. Quoting of PAN no. of 1st party and 2nd Party (for example Seller and Buyer in the transaction
                                    of SALE) is a must where the transaction involves a property valued at Rupees 5 lac or more (IT
                                    Rules). If the party concerned do not have a PAN number, he/she will make a declaration in form
                                    no. 60/61 giving therein the particulars of such transaction. Form 60/61 is available for
                                    download.</li>
                                <li className='w-full'> 5. Mobile number of the applicant is to be specified. Summary of e-Assessment slip will be sent by
                                    SMS.</li>
                                <li className='w-full'> 6. If e-mail address is submitted by applicant e-Assessment slip will be sent to the specified
                                    e-mail address also.</li>
                                <li className='w-full'> 7. Name address and other details of the 1st party and 2nd party (viz. Seller and Buyer) are to be
                                    entered to generate the e-Assessment slip.</li>
                                <li className='w-full'> 8. Following particulars are compulsory for generating e-Assessment slip of a Property: </li>
                                <br />
                                District, Thana, Mouza (other than Kolkata and Howrah corporation area).
                                <br />
                                Road Name (Kolkata and Howrah corporation area and some Municipal area).
                                <br />
                                Road Zone (Kolkata and Howrah corporation area and some Municipal area), if road has different
                                zones. <br />
                                RS Plot Number and Area of the Land for Land property and Area of apartment for Apartment property.
                            </ol>
                        </div>

                    </div>
                    <div class="flex flex-wrap flex-auto justify-center bg-zinc-200 h-[5rem] items-center ">
                        <button onClick={() => navigate("/FillReq")} class="flex flex-wrap absolute w-[15rem] bg-blue-800 justify-center text-white font-bold border-[.15rem] border-zinc-500 cursor-pointer "> Read & Please Proceed </button>
                    </div>

                </div>
                <div class="flex flex-wrap bg-blue-800 h-[4rem] mt-[1rem] justify-center items-center text-white font-bold  ">
                    Contents provided by Directorate of Registration & Stamp Revenue, Government of West Bengal. Designed and
                    Developed by National Informatics Centre. This website is best viewed in IE.9 and above and 1600 X 900
                    Resolution Disclaimer

                </div>
            </div>



        </div>
    )

}

export default NewRequition 