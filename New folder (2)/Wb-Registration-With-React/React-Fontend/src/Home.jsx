import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Popup = ({onClose})=>{
    const navigate = useNavigate();
    return (
        <div className=" absolute flex-wrap z-1 w-[600px] h-[450px] ml-[-40rem] mt-[-30rem] bg-zinc-500 rounded-md">
        <div className=" flex absolute [1px] rounded-md mt-[-.1rem] ml-[-.1rem] bg-zinc-100 m-[15%] p-[20px] w-[600px] h-[450px]">
            <span onClick={onClose} className=" flex absolute font-bold ml-[35rem] float-right font-[40rem] hover: text-zinc-800 no-underline cursor-pointer font-extrabold ">&times;</span>
            <form >
                <div className="bg-lime-500 w-[600px] ml-[-20px] mt-[-20px] h-[70px]"> <span class="ml-[20px] font-bolder text-[30px] text-white">e-Requisition From
                    Fillup </span> </div>

                <div className=" flex flex-wrap relative bg-blue-500 ml-[-20px] w-[600px] h-[300px]">
                    <div onClick={() => navigate("/NewReq")} className="mt-[1rem]"> <img id="arrow1"
                        className=" flex flex-wrap text-[1rem] absolute w-[25px] h-[25px] mt-[8px] ml-[20px] cursor-pointer"
                        src="/public/Arrow Img.png" alt="Arrow" /> <span className="flex flex-wrap absolute w-[32rem] mt-[rem] ml-[3.5rem]  text-[1rem] text-white cursor-pointer">
                            Fill up new e-Requisition Form
                        </span> </div>

                    <div className="mt-[3rem]"> <img class="flex absolute text-[1rem] [25px] h-[25px] mt-[14px] ml-[22px] cursor-pointer"
                        src="/public/Arrow Img.png" alt="Arrow" /> <span  className="flex absolute w-[32rem] mt-[.5rem] ml-[3.5rem] text-[1rem] text-white cursor-pointer">
                            Fill up Incomplete e-Requisition Form </span></div>

                    <div className="mt-[5.5rem]"> <img  className=" flex absolute text-[1rem] w-[25px] h-[25px] mt-[8px] ml-[20px] cursor-pointer"
                        src="/public/Arrow Img.png" alt="Arrow" /> <span className="flex absolute w-[32rem] mt-[.5rem] ml-[3.5rem] text-[1rem] text-white cursor-pointer">
                            Modification of e-Requisition Form </span></div>

                    <div className="mt-[7.5rem]"> <img  className="flex absolute text-[1rem] w-[25px] h-[25px] mt-[8px] ml-[20px] cursor-pointer"
                        src="/public/Arrow Img.png" alt="Arrow" /> <span className="flex absolute w-[32rem] mt-[.5rem] ml-[3.5rem] text-[1rem] text-white cursor-pointer">
                            Additional Information of Deed before Presentation
                        </span></div>

                    <div className="mt-[9.5rem]"> <img className="flex absolute text-[1rem] w-[25px] h-[25px] mt-[8px] ml-[20px] cursor-pointer"
                        src="/public/Arrow Img.png" alt="Arrow" /> <span className="flex absolute w-[32rem] mt-[.5rem] ml-[3.5rem] text-[1rem] text-white cursor-pointer">
                            Verify your of mobile number for registration of deed </span></div>

                    <div className="mt-[11.5rem]"> <img   className="flex absolute text-[1rem] w-[25px] h-[25px] mt-[8px] ml-[20px] cursor-pointer"
                        src="/public/Arrow Img.png" alt="Arrow" /> <span className="flex absolute w-[32rem] mt-[.5rem] ml-[3.5rem] text-[1rem] text-white cursor-pointer">
                            Printing of e-Assessment Slip </span></div>

                    <div className="mt-[13.5rem]"> <img className="flex absolute text-[1rem] w-[25px] h-[25px] mt-[8px] ml-[20px] cursor-pointer"
                        src="/public/Arrow Img.png" alt="Arrow" /> <span className="flex absolute w-[32rem] mt-[.5rem] ml-[3.5rem] text-[1rem] text-white cursor-pointer">
                            Application for Extension of Validity of
                            e-Assessment Query Slip </span></div>
                </div>
                <div className="border-[1px] mt-[10px] w-[600px] ml-[-20px]"></div>

                <div><button onClick={onClose}
                    className="rounded-md text-[20px] font-bold bg-red-700 ml-[70%] mt-[15px] w-[100px] h-[40px] hover: bg-cyan-300 cursor-pointer">
                    Close</button>
                </div>
            </form>
        </div>

    </div>

    )
}

const  Home =() => {
    const navigate = useNavigate();

    const [showpopup, setshowpopup] = useState(false);




    return (
        <>
            <div className='pt-[.2rem] pl-[.5rem] pr-[.5rem] pb-[.5rem]'>
                <header>
                    <img className="w-[100%] pt-[5px] pb-[2px] ring-blue-500 m-0 p-0" src="public/HeaderIMG.jpg" alt="Hearder Image" />
                </header>
                <nav className="nav-1 flex items-center justify-between bg-cyan-700 h-[3rem] px-4">

                    <div className="nav-header lg:hidden">
                        <button
                            type="button"
                            className="navbar-toggle bg-white p-2 rounded-md"
                            aria-label="Toggle navigation"

                        >
                            <span className="block bg-cyan-700 w-6 h-[2px] rounded-sm mb-1"></span>
                            <span className="block bg-cyan-700 w-6 h-[2px] rounded-sm mb-1"></span>
                            <span className="block bg-cyan-700 w-6 h-[2px] rounded-sm"></span>
                        </button>
                    </div>


                    <div id="mynavbar" className="hidden lg:flex items-center w-full justify-between flex-wrap lg:flex-nowrap lg:gap-8">
                        <ul className="nav navbar-nav flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-6 list-none p-0 m-0 w-full lg:w-auto">
                            <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                            <li className=' group '><a href="#" className="text-white hover:text-gray-300 ">About Us</a>
                                <ul className='flex flex-wrap absolute bg-orange-600 w-[15rem] mt-[.80rem] group-hover:visible invisible'>
                                    <li className='hover:cursor-pointer hover:bg-white w-[15rem] p-[.4rem]'>History</li>
                                    <li className='hover:cursor-pointer hover:bg-white w-[15rem] p-[.4rem] '>Vission, MIssion and Object</li>
                                    <li className='hover:cursor-pointer hover:bg-white w-[15rem] p-[.4rem] '>Organization Setup</li>
                                </ul>
                            </li>
                            <li><a href="#" className="text-white hover:text-gray-300">Contacts</a>
                                <ul className='flex flex-wrap absolute bg-orange-600 w-[15rem] mt-[.80rem] group-hover:visible invisible'>
                                    <li className='hover:cursor-pointer hover:bg-white w-[15rem] p-[.4rem]'>History</li>
                                    <li className='hover:cursor-pointer hover:bg-white w-[15rem] p-[.4rem] '>Vission, MIssion and Object</li>
                                    <li className='hover:cursor-pointer hover:bg-white w-[15rem] p-[.4rem] '>Organization Setup</li>
                                </ul>

                            </li>
                            <li><a href="#" className="text-white hover:text-gray-300">Rules, Acts & Notifications</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300">Citizen's Information</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300">Grievance Redressal</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300">RTI</a></li>
                        </ul>


                        <div className="flex items-center gap-2 mt-4 lg:mt-0">
                            <input
                                type="search"
                                placeholder="Search Within Website"
                                className="outline-none ml-[-40rem]  pl-2 w-48 h-8 rounded-md"
                            />
                            <button
                                type="button"
                                className="bg-white text-cyan-700 px-3 h-8 rounded-md"
                            >
                                Go
                            </button>
                        </div>
                    </div>


                    <div className="flex ml-[-50rem]  items-center gap-4">
                        <a href="#" className="w-4 h-4 bg-zinc-900 rounded-md"></a>
                        <a href="#" className="w-4 h-4 bg-stone-300 rounded-md"></a>
                        <button onClick={() => navigate("/loginpage")} className="text-white">Officers Login</button>
                    </div>
                </nav>
                <div className="slider max-sm:mt-[25rem] overflow-hidden mt-[.22rem] flex relative w-[100%] max-w-[100%] h-[15rem] ">




                    <div className=" slides flex items-center transition-transform ">
                        <img className="slide h-[15rem]" src="/public/SlideIMG-1.jpg" alt="img-1" />
                        <img className="slide h-[15rem]" src="/public/SlideIMG-2.jpg" alt="img-2" />
                        <img className="slide h-[15rem]" src="/public/SlideIMG-3.png" alt="img-3" />
                        <img className="slide h-[15rem]" src="/public/SlideIMG-4.png" alt="img-4" />
                        <img className="slide h-[15rem]" src="/public/SlideIMG-5.jpg" alt="img-5" />
                        <img className="slide h-[15rem]" src="/public/SlideIMG-6.png" alt="img-6" />

                    </div>
                </div>
                <div className="panel-body-1 flex flex-wrap flex-auto ml-[2rem] mt-[2rem] ">


                    <li className="flex flex-wrap w-[100%]">
                        <b className="font-[14px] flex flex-wrap ml-[4rem] text-red-600">
                            Notice regarding the permanent appointment of MMR for area under the jurisdiction of Jangipara/Haripal Police Stations in the District of Hooghly. Last Date 4th December, 2024. For details

                            <a href="" target="_blank" className="flex flex-wrap ml-[1rem] text-blue-600  "> Click Here
                                <img className="flex flex-wrap h-[1.5rem]  ml-[1rem]" src="/public/pdf-symbol.gif" alt="" />
                            </a>

                            <img className="h-3.5 ml-[1rem] mt-[.5rem] flex flex-wrap " src="/public/New.gif" alt="" />
                        </b>
                        <br />

                    </li>
                    <li className="flex flex-wrap mt-[1rem]  w-[100%]">
                        <b className="text-red flex flex-wrap font-[14px] ml-[4rem] text-red-600 ">
                            Remission of Stamp Duty by 2% and reduction in Circle Rate/IGR Rate by 10% discontinued with effect from 1st July, 2024

                            <a href="" target="_blank" class="text-cyan flex flex-wrap ml-[1rem] text-blue-600 "> Click Here
                                <img className="flex flex-wrap ml-[1rem] h-[1.5rem] " src="/public//pdf-symbol.gif" alt="" />
                            </a>

                            <img className="h-3.5 ml-[1rem] mt-[.5rem]" src="/public/New.gif" alt="" />
                        </b>
                        <br />

                    </li>
                    <li className="flex flex-wrap mt-[1rem] w-[100%] ">
                        <b class="text-red flex flex-wrap  font-[14px] ml-[4rem] text-red-600 ">
                            Notification regarding Creation of ADSR Lalgola.

                            <a href="" target="_blank" className="text-cyan flex flex-wrap ml-[1rem] text-blue-600 "> Click Here
                                <img className="flex flex-wrap h-[1.5rem] ml-[1rem] " src="/public//pdf-symbol.gif" alt="" />
                            </a>

                            <img className="h-3.5 ml-[1.5rem] mt-[.5rem]" src="/public/New.gif" alt="" />
                        </b>
                        <br />

                    </li>
                    <li className="flex flex-wrap mt-[1rem] w-[100%]">
                        <b className="text-red font-[14px] flex flex-wrap ml-[4rem] text-red-600">
                            Masking of sensitive personal information like Aadhaar, PAN, Biometric-data etc. contained in the documents registered under the Registration Act, 1908. To know the details

                            <a href="" target="_blank" class="text-cyan flex flex-wrap ml-[1rem] text-blue-600 "> Click Here
                                <img className="flex flex-wrap h-[1.5rem] ml-[1rem] " src="/public/pdf-symbol.gif" alt="" />
                            </a>

                            <img className="h-3.5 mt-[.5rem] flex flex-wrap ml-[1rem] " src="Assets/Images/New.gif" alt="" />
                        </b>
                        <br />

                    </li>



                </div>



                <div className="flex flex-wrap flex-auto gap-[10px] w-[100%] h-[100%] mt-[4rem] ml-[2rem]">
                    <div className=" flex flex-wrap w-[35rem] h-[25rem] border-[2px] border-solid border-sky-500 rounded-2xl font-[14px] text-left pb-[5px] pr-[50px] pl-[50px] font-bold">

                        <div>
                            <img src="/public/analytics.jpeg" alt=""
                                class=" pt-[30px] mt-[-1rem] ml-[-2rem] flex flex-wrap" />

                            <div>
                                <table class="  flex flex-wrap border-[2px] w-[33rem] font-bold pb-[5px] mt-[-2rem] ml-[-02rem] ">
                                    <tbody className="  mt-[2rem] ml-[2rem]">
                                        <tr className="">
                                            <th className="w-[50%] text-center border-[.10rem] border-zinc-300 text-[#0b5b9f] font-bold " rowSpan={2}>e-Services</th>
                                            <th className="w-[50%] text-center border-[.10rem] border-zinc-300 text-[#0b5b9f] font-bold" colSpan={2}>e-Service Count <b className="text-red-500">***</b></th>

                                        </tr>

                                        <tr class=" ">
                                            <th className=" text-center border-[.10rem] border-zinc-300 text-[#0b5b9f] font-bold">Today</th>
                                            <th className=" text-center border-[.10rem] border-zinc-300 text-[#0b5b9f] font-bold">Current Month</th>

                                        </tr>

                                        <tr class=" border-[.10rem] text-left h-[26px]">
                                            <td className="border-[.10rem] text-left h-[26px] text-[#0b5b9f] ">Deeds Presented</td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a] "> <span>0</span></td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a] "> <span>1,36,775</span></td>
                                        </tr>
                                        <tr class=" border-[.10rem] text-left h-[26px]">
                                            <td className="border-[.10rem] text-left h-[26px] text-[#0b5b9f]">Deeds Registered</td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a]"><span>0</span></td>

                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a]"><span>1,32,627</span></td>
                                        </tr>
                                        <tr class="border-[.10rem] text-left h-[26px]">
                                            <td className="border-[.10rem] text-left h-[26px] text-[#0b5b9f]" >No. of e-Payments</td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a] "> <span>0</span> </td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a]"><span>1,24,776</span></td>
                                        </tr>
                                        <tr class="border-[.10rem] text-left h-[26px]">
                                            <td className="border-[.10rem] text-left h-[26px] text-[#0b5b9f]">Certified Copies of Deed</td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a] "> <span>0</span></td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a]"><span>53,632</span></td>
                                        </tr>
                                        <tr class="border-[.10rem] text-left h-[26px]">
                                            <td className="border-[.10rem] text-wrap h-[26px] text-[#0b5b9f]">Assesment of Market Value</td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a]"> <span>5,908</span></td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a]"> <span>2,94,172</span></td>
                                        </tr>
                                        <tr class="border-[.10rem] text-left h-[26px]">
                                            <td className="border-[.10rem] text-left h-[26px] text-[#0b5b9f]">Searching of Deed</td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a]"><span>21,301</span></td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a]"><span>19,53,352</span></td>
                                        </tr>
                                        <tr class="border-[.10rem] text-left h-[26px]">
                                            <td className="border-[.10rem] text-left h-[26px] text-[#0b5b9f]">Current Status of Deed</td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a]"> <span>181</span> </td>
                                            <td className="border-[.10rem] text-left h-[26px] text-[#c7116a]"> <span>11,717</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>








                    </div>



                    <div className=" flex flex-wrap">
                        <table class="flex flex-wrap w-[35rem] h-[25rem] border-[2px] boder-solid border-sky-500 rounded-2xl font-[14px] ">
                            <img src="/public/What's Current.jpeg" alt="" class=" h-[4rem] pt-[30px] mt-[-1rem] ml-[1rem] flex flex-wrap" />
                            <tbody>
                                <tr>
                                    <td className="pl-[px] pt-[2px] h-[14px]">
                                        <table className="w-[100%]">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <marquee behavior="100" direction="up">

                                                            <div className="h-[235px] font-[14px] pr-[4px] text-justify ">



                                                                <div className="text-[#646569] ">
                                                                    Remission of Stamp Duty by 2% and reduction in Circle
                                                                    Rate/IGR Rate by 10% discontinued with effect from 1st July,
                                                                    2024.

                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    Notification regarding Creation of ADSR Lalgola.&nbsp;

                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    Masking of sensitive personal information like Aadhaar,
                                                                    PAN, Biometric-data etc. contained in the documents
                                                                    registered under the Registration Act, 1908. To know the
                                                                    details&nbsp;
                                                                </div>
                                                                <br />

                                                                <div className="text-[#646569] ">
                                                                    Remission on Sale/Assignment by Co-operative in f/o
                                                                    Member. To know the details&nbsp;
                                                                </div>
                                                                <br />

                                                                <div className="text-[#646569] ">
                                                                    "Search by Deed no And Query no" is now available under
                                                                    "Search of Registration Made(Index)" sub heading in
                                                                    citizen service on the directorate website
                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    Stamp Duty on Immovable Property Valued from 40 Lacs to
                                                                    1 Core has been reduced by 1 percent since 01-02-2018
                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    Registration has been integrated with Income Tax for
                                                                    verification of PAN of the parties at the time of
                                                                    registration of deeds.
                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    e-Appointment for Registration of Deed is now available
                                                                    in this website for all Registration offices in this
                                                                    state
                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    E-Payment is compulsory if Stamp Duty payable is more
                                                                    than Rs.10,000/- or Registration Fee payable is more
                                                                    than Rs.5,000/- or both
                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    Index of Legacy deed (Non computerized deed) is
                                                                    available online for a number of offices.
                                                                    For details see -View Legacy deed details- in this web
                                                                    page.
                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    All Registration offices are computerised
                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    Integrated Queue Management System(IQMS) is operational
                                                                    in 27 Registration Offices
                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    Please install security certificate to avoid SSL
                                                                    warning. Link is provided in the bottom right corner of
                                                                    the screen
                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    e-Requisition form can be filled in the website for 60
                                                                    transactions of Sale, Gift, Partition, Exchange, Lease,
                                                                    Settlement, Release, Declaration, Copy of Decree and
                                                                    Bond
                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    Following Banks are integrated with GRIPS using double
                                                                    verfication method:- Axis Bank,Bank of India,Bank of
                                                                    Maharastra,Corporation Bank,ICICI Bank,IDBI,Indian
                                                                    Bank,Indian Overseas Bank, Oriental Bank of
                                                                    Commerce,Punjab National Bank, State Bank Of India and
                                                                    Vijaya Bank
                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    E-Nathikaran and NLRMP are implemented in 255
                                                                    Registration Offices
                                                                </div>
                                                                <br />
                                                                <div className="text-[#646569] ">
                                                                    Honourable Finance Minister, Govt. of West Bengal
                                                                    inaugurated the Website of the Directorate on 2nd Nov
                                                                    2012
                                                                </div>




                                                            </div>

                                                        </marquee>


                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                    <div
                        class="e-service flex flex-wrap flex-auto  w-[32rem] h-[56rem] border-[2px] border-blue-500 rounded-md font-[14px] justify-center pb-[5px] pl-[30px] pr-[50px] pt-[30px] font-bold">
                        <div>
                            <div>
                                <img src="/public/eservice.jpeg" class="  mt-[-1rem]" />
                            </div>
                            <div>&nbsp;</div>
                            <div>
                                <div className=" flex">

                                    <a href="http://127.0.0.1:5501/EDOB.html"><img id="eodb" src="/public/eodb.png" alt=""
                                        className="flex cursor-pointer w-[10rem]" /> </a>



                                    <div> <img src="/public/mar_reg.png" class=" flex cursor-pointer w-[10rem]" /> </div>
                                   


                                    <img  onClick={()=> setshowpopup(true)} src="/public/req.png" className=" flex cursor-pointer w-[10rem]" />
                                    {showpopup && <Popup onClose={()=> setshowpopup(false)} />}
                                   




                                </div>
                                <div class="flex ">
                                    <a href="">
                                        <img src="/public/eDeed_logo.png" alt="" className="  cursor-pointer w-[10rem]" />
                                    </a>
                                    <a href="">
                                        <img src="/public/epay_refund.png" className=" cursor-pointer w-[10rem]" />
                                    </a>
                                    <a href="">
                                        <img src="/public/calc.png" className=" cursor-pointer w-[10rem]" />
                                    </a>
                                </div>
                                <div class="flex ">
                                    <a href="">
                                        <img src="/public/ROD.png" alt="" className=" cursor-pointer w-[10rem]" />
                                    </a>
                                    <a href="">
                                        <img src="/public/SOD.png" className=" cursor-pointer w-[10rem]" />
                                    </a>
                                    <a href="">
                                        <img src="/public/copyDeed.png" className=" cursor-pointer w-[10rem]" />
                                    </a>
                                </div>
                                <div class="flex ">
                                    <a href="">
                                        <img src="/public/LDV.png" alt="" className=" cursor-pointer w-[10rem]" />
                                    </a>
                                    <a href="">
                                        <img src="/public/LRO.png" className=" cursor-pointer w-[10rem]" />
                                    </a>
                                    <a href="">
                                        <img src="/public/JRO.png" className="  cursor-pointer w-[10rem]" />
                                    </a>
                                </div>
                                <div class="flex ">
                                    <a href="">
                                        <img src="/public/csd.png" alt="" class=" cursor-pointer w-[10rem]" />
                                    </a>
                                    <a href="">
                                        <img src="/public/eApp.png" class=" cursor-pointer w-[10rem]" />
                                    </a>
                                    <a href="">
                                        <img src="/public/e-Nathikaran App.png" class="  cursor-pointer w-[10rem]" />
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="flex flex-wrap h-[22rem] w-[35rem] absolute mt-[26rem] border-[2px] border-blue-500 rounded-2xl font-[14px] font-bold pb-[5px] pl-[30px] pr-[50px] pt-[30px] ">
                        <img src="/public/aboutus.jpeg" alt="" class=" flex flex-wrap w-[10rem] h-[2rem] mt-[-1rem]" />
                        <div>&nbsp;</div>
                        <div class="flex flex-wrap w-[30rem] mt-[1rem] text-zinc-500 ">
                            Directorate of Registration and Stamp Revenue, West Bengal is one of the oldest directorate
                            under Government of West Bengal. Earlier the directorate was known as the Directorate of
                            Registration. It was redesignated at its present form in the year 1994. As per available
                            information, the earliest record on systematic registration in Presidency Division was started
                            on 01.02.1781. Mr. Edward Tiretta was first appointed for a salary of one thousand sicca as
                            registrar of memorials
                        </div>
                        <div>
                            <div class="more flex flex-wrap text-blue-500 ">
                                <a href="">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        className=" absolute flex flex-wrap w-[35rem] h-[30rem] mt-[26rem] ml-[36rem] border-[2px] border-blue-500 rounded-2xl font-[14px] pb-[5px] pl-[30px] pr-[50px] pt-[30px] font-bold">
                        <div>
                            <img src="/public/connectwithus.jpeg" class="flex flex-wrap mt-[-1rem] ml-[-1.5rem]" alt="" />
                        </div>
                        <div>&nbsp;</div>
                        <div className="flex flex-wrap text-zinc-500 w-[35rem] ml-[-1.5rem]">
                            <span className="flex flex-wrap "> Directorate of Registration and Stamp Revenue</span>
                            <span className="flex flex-wrap ">Finance(Revenue) Department,Government of West Bengal</span>
                            <span className="flex flex-wrap ">WEBEL STP II Building, 4th Floor, DN-53, Sec-V, Salt Lake City,
                                Kolkata - 700 091</span>

                        </div>
                        <img src="/public/Location.png" alt=""
                            className="flex flex-wrap  w-[32rem] rounded-md h-[18rem] ml-[-1.4rem]" />
                    </div>
                    <div className="help-desk flex flex-wrap flex-auto absolute  w-[35rem] mt-[50rem] border-[2px] border-blue-500 rounded-2xl font-[14px] pl-[30px] pb-[5px] pr-[50px] pt-[30px] font-bold">

                        <img src="/public/helpdesk.jpg" alt="" className="flex flex-wrap " />
                        <div>&nbsp;</div>
                        <div className="flex flex-wrap"> <b> e-mail ID: </b>
                            <p >
                                prabhatkumardas1992@gmail.com</p>
                        </div>
                        <div class="flex flex-wrap ml-[8rem]"> <b>Contact No.: </b>
                            <p  class="flex flex-wrap"> 9735157562 </p>
                        </div>
                    </div>
                    

                </div>
            </div>
            <div className="footer flex flex-wrap flex-auto mt-[2rem] border-[1.5px] border-zinc-500 gap-[70px] bg-zinc-100 w-[100%]">
                <div> <img src="/public/grips_logo3.png" alt="" className="flex flex-wrap  w-[150px] h-[80px] border-r-2 border-zinc-400 items-center cursor-pointer  " />
                </div>
                <div className="flex flex-wrap flex-auto"> <img id="wbfin" src="/public/wbfin_logo.png" alt="" className="flex flex-wrap w-[150px] h-[80px] border-r-2 border-zinc-400 items-center cursor-pointer  " />
                </div>
                <div className="flex flex-wrap flex-auto">
                    <img id="bsk" src="/public/bsk.png" alt="" className="flex flex-wrap w-[150px] h-[80px] border-r-2 border-zinc-400 items-center cursor-pointer" />
                </div>
                <div className="flex flex-wrap flex-auto">
                    <img id="ifms" src="/public/ifms_logo.png" alt="" className="flex flex-wrap w-[150px] h-[80px] border-r-2 border-zinc-400 items-center cursor-pointer" />
                </div>
                <div className="flex flex-wrap flex-auto">
                    <img id="LR" src="/public/LR.png" alt="" className="flex flex-wrap w-[150px] h-[80px] border-r-2 border-zinc-400 items-center cursor-pointer" />
                </div>
                <div className="flex flex-wrap flex-auto">
                    <img id="ss" src="/public/SS.png" alt="" className="flex flex-wrap w-[150px] h-[80px] border-r-2 border-zinc-400 items-center cursor-pointer" />
                </div>
                <div className="flex flex-wrap flex-auto">
                    <img id="india" src="/public/india.png" alt="" className="flex flex-wrap w-[150px] h-[80px] border-r-2 border-zinc-400 items-center cursor-pointer" />
                </div>

            </div>

            <div className="flex flex-wrap flex-auto overflow-auto bg-blue-500 items-center  h-[150px] w-[100%] mt-[1rem]">
                <div className=" flex flex-wrap flex-auto ">
                    <div className="flex flex-wrap ">
                        <a href="">
                            <span className="text-white">
                                Site Map
                            </span>
                        </a>
                    </div>
                    <div>&nbsp;</div>
                    <div className="flex flex-wrap flex-auto">
                        <div className=" flex flex-wrap ">
                            <span className="text-white flex flex-wrap font-bold text-[1.2rem]">
                                Total Visitor:
                            </span>
                            <br />
                            <span className="flex flex-wrap ml-[-10rem] mt-[1.5rem] w-[10rem] text-white">
                                (Since- 25/05/2016)
                            </span>
                        </div>
                        <div className="w-[400px]">&nbsp;</div>
                        <div className="flex flex-wrap flex-auto ml-[-15rem]">
                            <a href="">
                                <img src="/public/fb.jpg" alt="" className="w-[50px] flex flex-wrap" />
                            </a>
                            <a href="">
                                <img src="/public/tw.jpg" alt="" className="w-[50px] flex flex-wrap" />
                            </a>

                        </div>



                    </div>
                    <div className="border-[1px] border-white flex flex-wrap mt-[-2rem] absolute ml-[50rem] h-[8rem]"></div>
                    <div className="flex flex-wrap absolute ml-[60rem] mt-[-1rem] cursor-pointer ">
                        <img src="/public/Barcode.jpeg" alt="" width="100px" />
                    </div>
                    <div className="absolute ml-[70rem] mt-[-2rem]">
                        <div>

                            The information provided Online is updated and no physical visit is required for the
                            Services
                            provided Online.
                        </div>
                        <div> Last Updated : 07/08/2023</div>
                        <div> <span>Site Designed, Developed by </span>
                            <span className="text-yellow-300 cursor-pointer" id="NIC">

                                National Informatics Centre </span>
                            <div> Best viewed in Internet Explorer 10.0 / 11.0 or later</div>
                        </div>
                    </div>







                </div>

            </div>



        







        </>
    )
}

export default Home
