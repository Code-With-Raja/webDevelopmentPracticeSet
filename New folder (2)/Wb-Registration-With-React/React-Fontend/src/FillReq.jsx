import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"



function FillReq() {

    const navigate = useNavigate();
    const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();
    const onSubmit = (data) => console.log(data);

    const [isdisable, setIsdisable] = useState(true);
    const [newQueryDisable, setNewQueryDisable] = useState(true);

    const state = () => {
        const state = document.getElementById("state");
        const dis = document.getElementById("dis");
        const dis1 = document.getElementById("dis1")

        if (state.value === "19") {
            dis.style.display = "none"
            dis1.style.display = "block"
        }
    }
    const district = () => {
        const dis2 = document.getElementById("dis2")
        const thana = document.getElementById("thana")
        const dis1 = document.getElementById("dis1")
        if (dis1.value === "01") {
            dis2.style.display = "block"
            thana.style.display = "none"
        }
    }




    return (
        <div className="flex flex-wrap m-[1rem] ">
 
            <header className="flex justify-center items-center w-full">
                <img src="/HeaderIMG.jpg" alt="Header Image" className="w-[1840px] max-w-full" />
            </header>

            <div className="flex flex-wrap flex-auto border-[1px] border-[#2e6da4] text-[1.2rem] ">
            <div className="w-full max-w-[1840px] h-10 bg-[#2e6da4] text-white flex items-center justify-center font-bold">
                 <p>Applicant and Transaction</p>
            </div>

<div className="m-5 flex">
  {/* Home Button */}
  <img
    src="/home.jpeg"
    alt="Home"
    className="cursor-pointer w-[2rem] h-[2rem]"
    onClick={() => navigate("/")}
  />

  {/* Menu Section */}
  <div className=" ml-[-3rem] mt-[4rem] space-y-4 ">
    {/* Menu Item 1 */}
    <div className="flex items-center space-x-3">
      <img src="/table1.gif" alt="Table 1" />
      <span className="text-black font-medium">Applicant & Transaction</span>
    </div>

    {/* Menu Item 2 */}
    <div className="flex items-center space-x-3">
      <img src="/table2.gif" alt="Table 2" />
      <a href="Transferer & Transferee.html" className="text-blue-700 hover:underline">
        Transferer & Transferee
      </a>
    </div>

    {/* Menu Item 3 */}
    <div className="flex items-center space-x-3">
      <img src="/table3.gif" alt="Table 3" />
      <a href="#" className="text-blue-700 hover:underline">
        Property Details
      </a>
    </div>

    {/* Menu Item 4 */}
    <div className="flex items-center space-x-3">
      <img src="/table4.gif" alt="Table 4" />
      <a href="#" className="text-blue-700 hover:underline">
        Finalise
      </a>
    </div>
  </div>
</div>



<div className="flex  border-[1px] border-blue-500 rounded-md flex flex-wrap w-[84%] h-[1800px] ml-[15%] mt-[-170px] ">
                <div className="flex flex-col border rounded w-[97%] h-auto ml-5 mt-5 p-4 space-y-6">
  {/* Header Section */}
  <div className="bg-green-200 w-full h-10 flex items-center px-5">
    <p className="text-[25px] font-bold">
      Please Verify Mobile Number Before Proceeding:
    </p>
  </div>

  {/* Form Section */}
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 px-5">
    {/* Mobile Number Input */}
    <div className="flex items-center space-x-4">
      <label htmlFor="mobileNo" className="text-[20px] font-bold w-48">
        Mobile Number <span className="text-red-500">*</span>
      </label>
      <input
        {...register("Mobnumber", {
          required: { value: true, message: "This field is required" },
          maxLength: { value: 10, message: "Max Length 10" },
          minLength: { value: 2, message: "Min Length 2" },
        })}
        type="number"
        className="text-[20px] p-2 font-bold h-10 rounded border border-zinc-200 w-[250px]"
      />
      <button
        type="button"
        className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg"
      >
        Send OTP
      </button>
    </div>

    {/* Error and Info */}
    {errors.Mobnumber && (
      <p className="text-red-500 ml-[12rem]">{errors.Mobnumber.message}</p>
    )}
    <p className="text-blue-500 font-bold ml-[12rem] text-sm">
      OTP is valid for 2 minutes
    </p>

    {/* OTP Input */}
    <div className="flex items-center space-x-4 mt-4">
      <label htmlFor="otp" className="text-[20px] font-bold w-48">
        OTP <span className="text-red-500">*</span>
      </label>
      <input
        {...register("OTP", {
          required: { value: true, message: "This field is required" },
          maxLength: { value: 6, message: "Max Length 6" },
          minLength: { value: 2, message: "Min Length 2" },
        })}
        type="number"
        className="text-[20px] p-2 font-bold h-10 rounded border border-zinc-200 w-[250px]"
      />
      <button
        type="button"
        className="hidden bg-blue-500 text-white text-sm px-4 py-2 rounded-lg"
      >
        Resend OTP
      </button>
    </div>

    {/* Error and Verify Message */}
    {errors.OTP && (
      <p className="text-red-500 ml-[12rem]">{errors.OTP.message}</p>
    )}

    {/* Validate Button and Success Text */}
    <div className="flex items-center space-x-6 mt-2">
      <button
        type="button"
        onClick={() => setIsdisable(!isdisable)}
        className="bg-yellow-500 text-white text-sm px-4 py-2 rounded-lg"
      >
        Validate OTP
      </button>
      <p className="text-yellow-800 font-semibold">OTP Verified. Please proceed</p>
    </div>
  </form>
</div>


                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap flex-row flex-auto shrink absolute border-[1px] border-green-500 rounded-[5px] h-[500px] w-[81%] mt-[20rem] ml-[20px]">
                        <div className=" w-[100%] h-[40px] bg-slate-700 ">
                            <p className="text-[20px] font-bold text-white ml-[30px] mt-[-.30px] ">Applicant Details :</p>

                            <div className="text-[20px] font-bold ml-[20px] mt-[2rem]">
                                Initial <span className="text-red-500 ml-[1rem] ">*</span>
                                <select name="" className="w-[5rem] h-[2rem] ml-[1rem] rounded-[.2rem] shadow-md " disabled={isdisable}  >
                                    <option value="Mr.">Mr.</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Mrs">Mss</option>
                                    <option value="Mrs">Ms</option>
                                    <option value="Mrs">Dr</option>
                                    <option value="Mrs">Prof</option>
                                    <option value="Mrs">Rev</option>
                                    <option value="Mrs">Smt</option>
                                    <option value="Mrs">Md</option>
                                    <option value="Mrs">Kumari</option>
                                    <option value="Mrs">Molla</option>
                                </select>
                            </div>

                            <label for=""><span className="flex flex-wrap text-[1.5rem] absolute ml-[15rem] mt-[-2rem] "> First Name <span
                                className="text-red-500 ml-[3rem] ">*</span></span> </label>
                            <input disabled={isdisable} type="text" className=" flex flex-wrap mt-[-2rem] ml-[27rem] w-[20rem] ring-zinc-500 ring-1 rounded-md " />


                            <label for="" className="flex flex-wrap ml-[2rem] text-[1.5rem] mt-[3rem]">Applicant Satus</label>
                            <select disabled={isdisable} name="" className=" flex flex-wrap w-[32rem]  h-[2rem] ml-[15rem] mt-[-2rem] rounded-[.2rem] shadow-md">
                                <option value="Advocate">Advocate</option>
                                <option value="Seller/Axicuting">Seller/Excutant</option>
                                <option value="attorny">Attorny of Excutant</option>
                                <option value="firm">Solitary Firm</option>
                                <option value="buyer">Buyer/Claimant</option>
                                <option value="AClaimant">Attorny of Claimant</option>
                                <option value="DeedWritter">Deed Writter</option>
                                <option value="cultivation">Cultivation</option>
                            </select>
                            <label for="" className="flex flex-wrap ml-[2rem] text-[1.5rem] mt-[2.5rem]">Postal Address</label>
                            <input disabled={isdisable} type="text" className=" flex flex-wrap w-[32rem]  h-[5rem] ml-[15rem] mt-[-2rem] rounded-[.2rem] ring-zinc-500 ring-1 shadow-md" />
                            <label for="" className="flex flex-wrap ml-[2rem] text-[1.5rem] mt-[1.5rem]">Thana <span className="text-red-500">*</span></label>
                            <input disabled={isdisable} type="text" id="thana" className=" flex flex-wrap w-[32rem] h-[2rem] ml-[15rem] mt-[-2rem] rounded-[.2rem] ring-zinc-500 ring-1 shadow-md" />
                            <select disabled={isdisable} name=" " className=" hidden flex flex-wrap w-[32rem] h-[2rem] ml-[15rem] mt-[-2rem] rounded-[.2rem] ring-zinc-500 ring-1 shadow-md">
                                <option value="00">Select</option>
                                <option value="10">Alipurduar</option>
                                <option value="01">Bhagwanpur</option>
                                <option value="11">Birpara</option>
                                <option value="12">Falakata</option>
                                <option value="14">Jaigaon</option>
                                <option value="15">Kalchini</option>
                                <option value="16">Kumargram</option>
                                <option value="13">Madarihat</option>
                                <option value="99">Shamuktala</option>

                            </select>
                            <select disabled={isdisable} id="dis2" name=" " className=" hidden flex flex-wrap w-[32rem] h-[2rem] ml-[15rem] mt-[-2rem] rounded-[.2rem] ring-zinc-500 ring-1 shadow-md">
                                <option value="00">Select</option>
                                <option value="01">Bankura</option>
                                <option value="26">BARIKUL</option>
                                <option value="07">Barjora</option>
                                <option value="08">Beliator</option>
                                <option value="09">Bishnupur</option>
                                <option value="05">Chhatna</option>
                                <option value="04">Gangajalghati</option>
                                <option value="25">HIRBANDH</option>
                                <option value="16">Indpur</option>
                                <option value="13">Indus</option>
                                <option value="12">Joypur</option>
                                <option value="15">Khatra</option>
                                <option value="23">Kotanpur</option>
                                <option value="14">Kotulpur</option>
                                <option value="03">Mejia</option>
                                <option value="06">Onda</option>
                                <option value="11">Patrasayer</option>
                                <option value="19">Raipur</option>
                                <option value="18">Ranibandh</option>
                                <option value="02">Saltora</option>
                                <option value="20">Sarenga</option>
                                <option value="24">Shitalpur</option>
                                <option value="21">Simlapal</option>
                                <option value="10">Sonamukhi</option>
                                <option value="22">Taldanga</option>
                                <option value="17">Taldangra</option>

                            </select>
                            <label for="" className="flex flex-wrap ml-[2rem] text-[1.5rem] mt-[1.5rem]">Telephone Number</label>
                            <input disabled={isdisable} type="text" className=" flex flex-wrap  w-[31rem]  h-[2rem] ml-[16rem] mt-[-2rem] rounded-[.2rem] ring-zinc-500 ring-1 shadow-md" />
                            <label for="" className="flex flex-wrap mt-[-22.5rem] ml-[50rem] text-[1.5rem] absolute "> Last Name </label>
                            <input disabled={isdisable} type="text" className="flex flex-wrap absolute mt-[-22rem] ml-[60rem] w-[22rem] ring-zinc-500 ring-1 rounded-md " />
                            <label for="" className="flex flex-wrap mt-[-17rem] ml-[50rem] text-[1.5rem] absolute ">State <span className="text-red-500">*</span></label>

                            <div >
                                <select disabled={isdisable} onChange={state} id="state" name=" " className="flex flex-wrap absolute w-[28rem] h-[2rem] ml-[55rem] mt-[-17rem] rounded-[.2rem] ring-zinc-500 ring-1 shadow-md">
                                    <option value="00"> Select</option>
                                    <option value="35">ANDAMAN AND NICOBAR ISLANDS</option>
                                    <option value="28">ANDHRA PRADESH</option>
                                    <option value="12">ARUNACHAL PRADESH</option>
                                    <option value="18">ASSAM</option>
                                    <option value="10">BIHAR</option>
                                    <option value="04">CHANDIGARH</option>
                                    <option value="22">CHHATTISGARH</option>
                                    <option value="26">DADRA AND NAGAR HAVELI</option>
                                    <option value="25">DAMAN AND DIU</option>
                                    <option value="07">DELHI</option>
                                    <option value="30">GOA</option>
                                    <option value="24">GUJARAT</option>
                                    <option value="06">HARYANA</option>
                                    <option value="02">HIMACHAL PRADESH</option>
                                    <option value="01">JAMMU AND KASHMIR</option>
                                    <option value="20">JHARKHAND</option>
                                    <option value="29">KARNATAKA</option>
                                    <option value="32">KERALA</option>
                                    <option value="31">LAKSHADWEEP</option>
                                    <option value="23">MADHYA PRADESH</option>
                                    <option value="27">MAHARASHTRA</option>
                                    <option value="14">MANIPUR</option>
                                    <option value="17">MEGHALAYA</option>
                                    <option value="15">MIZORAM</option>
                                    <option value="13">NAGALAND</option>
                                    <option value="21">ORISSA</option>
                                    <option value="34">PONDICHERRY</option>
                                    <option value="03">PUNJAB</option>
                                    <option value="08">RAJASTHAN</option>
                                    <option value="11">SIKKIM</option>
                                    <option value="33">TAMIL NADU</option>
                                    <option value="36">TELANGANA</option>
                                    <option value="16">TRIPURA</option>
                                    <option value="09">UTTAR PRADESH</option>
                                    <option value="05">UTTARANCHAL</option>
                                    <option value="19">WEST BENGAL</option>

                                </select>
                            </div>
                            <label for="" className="flex flex-wrap mt-[-13rem] ml-[50rem] text-[1.5rem] absolute "> District<span className=" text-red-500 " >*</span></label>
                            <input disabled={isdisable} id="dis" type="text" className=" flex flex-wrap w-[28rem] h-[2rem] ml-[56rem] mt-[-13rem] rounded-[.2rem] ring-zinc-500 ring-1 shadow-md" />
                            <div>
                                <select disabled={isdisable} id="dis1" onChange={district} name="" className=" hidden flex flex-wrap w-[26rem] h-[2rem] ml-[57rem] mt-[-13rem] rounded-[.2rem] ring-zinc-500 ring-1 shadow-md">
                                    <option value="00"> Select</option>
                                    <option value="20">Alipurduar</option>
                                    <option value="01">Bankura</option>
                                    <option value="03">Birbhum</option>
                                    <option value="08">Coochbehar</option>
                                    <option value="17">Dakshin Dinajpur</option>
                                    <option value="04">Darjeeling</option>
                                    <option value="06">Hooghly</option>
                                    <option value="05">Howrah</option>
                                    <option value="07">Jalpaiguri</option>
                                    <option value="22">Jhargram</option>
                                    <option value="21">Kalimpong</option>
                                    <option value="19">Kolkata</option>
                                    <option value="09">Malda</option>
                                    <option value="12">Murshidabad</option>
                                    <option value="13">Nadia</option>
                                    <option value="15">North 24-Parganas</option>
                                    <option value="23">Paschim Bardhaman</option>
                                    <option value="10">Paschim Midnapore</option>
                                    <option value="02">Purba Bardhaman</option>
                                    <option value="11">Purba Midnapore</option>
                                    <option value="14">Purulia</option>
                                    <option value="16">South 24-Parganas</option>
                                    <option value="18">Uttar Dinajpur</option>
                                </select>
                            </div>
                            <div>
                                <select disabled={isdisable} name=" " className=" hidden flex flex-wrap absolute w-[26rem] h-[2rem] ml-[57rem] mt-[-2rem] rounded-[.2rem] ring-zinc-500 ring-1 shadow-md">
                                    <option value="00"> Select</option>
                                    <option value="09">Almora</option>
                                    <option value="08">Bageshwar</option>
                                    <option value="02">Chamoli</option>
                                    <option value="10">Champawat</option>
                                    <option value="05">Dehradun</option>
                                    <option value="06">Garhwal</option>
                                    <option value="13">Hardwar</option>
                                    <option value="11">Nainital</option>
                                    <option value="07">Pithoragarh</option>
                                    <option value="03">Rudraprayag</option>
                                    <option value="04">Tehri Garhwal</option>
                                    <option value="12">Udham Singh Nagar</option>
                                    <option value="01">Uttarkashi</option>

                                </select>
                            </div>

                            <label for="" className="flex flex-wrap mt-[2rem] ml-[50rem] text-[1.5rem] absolute " > Pin </label>
                            <input disabled={isdisable} type="text" className=" flex flex-wrap w-[28rem] h-[2rem] ml-[56rem] mt-[2rem] rounded-[.2rem] ring-zinc-500 ring-1 shadow-md" maxLength="6" />
                            <label for="" className="flex flex-wrap mt-[2rem] ml-[50rem] text-[1.5rem] absolute "> E-Mail ID</label>
                            <input disabled={isdisable} type="text" className=" flex flex-wrap w-[28rem] h-[2rem] ml-[56rem] mt-[2rem] rounded-[.2rem] ring-zinc-500 ring-1 shadow-md" />




                        </div>

                    </form>

                    <div className="flex flex-wrap absolute border-[1px] border-zinc-200 rounded-[5px] h-[200px] w-[81%] mt-[720px] ml-[20px]">
                        <div className="w-[100%] h-[40px] bg-green-300">
                            <table>
                                <tbody >
                                    <tr>
                                        <td>
                                            <input type="radio" value="1" name="query" onClick={function () {
                                                if (!newQueryDisable) {
                                                    setNewQueryDisable(newQueryDisable)
                                                } else {
                                                    setNewQueryDisable(!newQueryDisable)
                                                }
                                            }} />
                                            <label for="" className="font-bold">New Query </label>
                                        </td>
                                        <td>
                                            <input type="radio" value="2" name="query" onClick={() => {
                                                if (newQueryDisable) {
                                                    setNewQueryDisable(!newQueryDisable)
                                                } else {
                                                    setNewQueryDisable(newQueryDisable)
                                                }
                                            }} />
                                            <label for="" className="font-bold">Query by copying data/information from old query </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>

                        <div id="query-no">
                            <label for="" className="flex flex-wrap relative text-[1rem] font-bold ml-[-92rem] mt-[3rem]">Query No / Query Year</label>
                            <input type="text" className=" w-[3rem] ml-[-80rem] align-center flex flex-wrap absolute text-[1rem] font-bold rounded-[.2rem] shadow-md mt-[-1rem]" maxlength="1" disabled={newQueryDisable} />
                            <input type="text" className=" w-[8rem] ml-[-76.5rem] flex flex-wrap absolute text-[1rem] font-bold rounded-[.2rem] shadow-md mt-[-1rem] " maxlength="9" disabled={newQueryDisable} />
                            <input type="text" className="w-[5rem] ml-[-68rem] flex flex-wrap absolute text-[1rem] font-bold rounded-[.2rem] shadow-md mt-[-1rem] " maxlength="4" disabled={newQueryDisable} />

                        </div>
                        <div className="flex flex-wrap absolute mt-[10rem]">


                            <span className="flex flex-wrap absolute ml-[40rem] mt-[-7rem] w-[50rem] font-bold">Select
                                Data/information to be copied from the following:</span>
                            <span>
                                <table className="mt-[-4rem] ml-[40rem] font-bold">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="radio" id="tranferor" />
                                                <label for="" id="tranferor1">Tranferor </label>
                                            </td>
                                            <td>
                                                <input type="radio" id="transferee" />
                                                <label for="" id="transferee1">Transferee</label>
                                            </td>
                                            <td>
                                                <input type="radio" id="property" />
                                                <label for="" id="property1">Property </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </span>

                        </div>

                        <div id="part3-4" className="flex flex-wrap absolute mt-[9rem] gap-[3rem] ml-[40rem]">
                            <input type="submit" value="Proceed" className=" text-[1rem] w-[5rem] h-[1.8rem] bg-blue-500 text-white rounded-[.2rem] cursor-pointer" />
                            <input type="submit" value="Preview" className=" text-[1rem] w-[5rem] h-[1.8rem] bg-blue-500 text-white rounded-[.2rem] cursor-pointer" />
                            <input type="submit" value="Reset" className=" text-[1rem] w-[5rem] h-[1.8rem] bg-blue-500 text-white rounded-[.2rem] cursor-pointer" />


                        </div>


                    </div>


                    <div className="flex flex-wrap absolute border-[1px] rounded-[5px] h-[150px] w-[81%] mt-[930px] ml-[20px]">
                        <div className=" w-[100%] h-[40px] bg-green-200 font-bold items-center ">
                            <label for="" className="ml-[1rem]">Proposed Transaction :</label>



                        </div>
                        <div className="flex flex-wrap absolute mt-[4rem] ml-[1rem] gap-[6rem] font-bold">
                            <label for="">Major * <span>01</span></label>
                            <select name="" id="major" className="w-[20rem] " onChange={()=>{
                                let major = document.getElementById("major")
                                if(major.value === "select"){
                                    document.getElementById("main-minor").style.display = "flex"
                                    document.getElementById("minor").style.display = "none"
                                }
                                if(major.value === "sale"){
                                    document.getElementById("minor").style.display = "flex"
                                    document.getElementById("main-minor").style.display = "none"
                                } else{
                                    document.getElementById("main-minor").style.display = "flex"
                                }
                                 

                            }}>
                                <option value="select">Select</option>
                                <option value="sale">Sale</option>
                                <option value="gift">Gift</option>
                                <option value="partition">Partition</option>
                                <option value="bond">Bond</option>
                                <option value="copy of decree">Copy of Decree</option>
                                <option value="declaration">Declaration</option>
                                <option value="exchange">Exchange</option>
                                <option value="lease">Lease</option>
                                <option value="merger">Merger/Demerger</option>
                                <option value="mortgage">Mortgage</option>
                                <option value="power of attorny">Power of Attorny related to immovabale Proparties</option>
                                <option value="release">Release</option>
                                <option value="settlement">Settlement</option>
                                <option value="transfer of lease">Transfer of Lease </option>
                            </select>



                        </div>
                       
                        <div className="flex flex-wrap absolute mt-[4rem] ml-[50rem] gap-[6rem] font-bold">
                            <label for="">Minor * <span>00</span></label>
                            <input id="main-minor" type="text" className=" h-[1.5rem] bg-zinc-200 rounded-md" />
                            <select name=" " id="minor" className=" hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] " >
                                <option value="00"> Select </option>
                                <option value="01">Sale Document </option>
                                <option value="02">Sale Agreement with Possession </option>
                                <option value="04">Sale agreement without possession [Full Stamp] </option>
                                <option value="06">Sale by any Central/State Govt undertaking/authority/SPV </option>
                                <option value="07">Sale executed in f/o cooperative society </option>
                                <option value="08">Sale executed by Cooperative society in f/o member </option>
                                <option value="09">Sale in favour of Government </option>
                                <option value="10">Development Agreement or Construction agreement </option>
                                <option value="12">Certificate of Sale </option>
                                <option value="13">Certificate of sale executed by Party </option>
                                <option value="18">Deed of Assignment in f/o member by Cooperative society </option>
                                <option value="24">Agreement for Deed of Assignment without possession </option>
                                <option value="30">Sale by Government </option>
                                <option value="31">Sale by W.B housing board to member of the Co-op Society </option>
                                <option value="32">Sale certificate executed by certifying authority </option>
                                <option value="39">Development Power of Attorney </option>
                                <option value="40">Amalgamation/Merger of Company </option>
                                <option value="41">Demerger of Company </option>
                                <option value="43">Sale agreement without possession </option>
                                <option value="45">Agreement of sale/assignment made by any Central/State Govt
                                    Undertaking/Authority/SPV </option>
                                <option value="48">Agreement for sale made by any Central/State Govt Undertaking/Authority/SPV
                                    (Full SD) </option>
                                <option value="51">Agreement for Assignment without possession </option>
                                <option value="52">Conversion of Leasehold interest to Freehold interest </option>

                            </select>
                            <select name=" " id="minor1" className="hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option value="00"> Select </option>
                                <option value="01">Gift in Favour of family members </option>
                                <option value="02">Gift in f/o Government </option>
                                <option value="03">Gift in f/o Local bodies </option>
                                <option value="04">Gift in f/o others except family members, Government, Local Body </option>
                                <option value="05">Cancellation of Gift </option>
                                <option value="07">Gift in f/o family members and others </option>

                            </select>
                            <select name="" id="minor2" className="hidden flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option value="00">Select</option>
                                <option value="01">Partition</option>

                            </select>
                            <select name=" " id="minor3" className=" hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option value="00"> Select </option>
                                <option value="01">Security Bond </option>
                                <option value="02">Indemnity Bond </option>

                            </select>
                            <select name=" " id="minor4" className="hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option value="00"> Select </option>
                                <option value="01">Copy of decree other than Partition </option>
                                <option value="02">Copy of Decree presented/executed by Party </option>

                            </select>
                            <select name=" " id="minor5" className="hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option value="00"> Select </option>
                                <option value="01">Declaration relating to immovable property </option>
                                <option value="02">Agreement relating to Immovable Property </option>
                                <option value="03">Cancellation of Agreement / Declaration </option>
                                <option value="04">Deed of Rectification </option>
                                <option value="05">Deed of Assent </option>
                                <option value="06">Transfer of Trust Property from Trustee to Beneficiary/Trustee </option>

                            </select>
                            <select name=" " id="minor6" className="hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option value="00"> Select </option>
                                <option value="01">Exchange </option>

                            </select>
                            <select name=" " id="minor7" className="hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option value="00"> Select </option>
                                <option value="03">Lease </option>
                                <option value="04">Lease in f/o Government </option>
                                <option value="07">Lease by Govt./Govt. Authority/Govt. Undertaking </option>
                                <option value="08">Surrender of Lease </option>
                                <option value="13">Lease in f/o Cooperative Society </option>
                                <option value="15">Lease in f/o member by Co-operative Society </option>
                                <option value="16">Agreement to Lease </option>
                                <option value="18">Kabuliyatnama </option>

                            </select>
                            <select name=" " id="minor8" className="hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option value="00"> Select </option>
                                <option value="01">Amalgamation (Other than company amalgamation) </option>

                            </select>
                            <select name=" " id="minor9" className="hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option value="00"> Select </option>
                                <option value="01">Mortgage with Possession </option>
                                <option value="03">Mortgage without Posse. executed in f/o Govt. by Govt. Servant </option>
                                <option value="04">Mortgage without Posse. executed by Co-op. Society in f/o Govt. </option>
                                <option value="05">Mortgage without Posse. by Farmers/SSIs. </option>
                                <option value="06">Mortgage without Posse. by Co-op. Society in f/o W.B Housing Board </option>
                                <option value="07">Mortgage without Posse. in f/o Financial Institution/Bank </option>
                                <option value="09">Mortgage without Possession by Co-op. in f/o others </option>
                                <option value="10">Mortgage without Possession by others </option>
                                <option value="11">Mortgage by Member in favour of Co-op Society </option>
                                <option value="12">Mortgage as collateral security without possession </option>
                                <option value="15">Assignment of Debt for Immovable Property </option>

                            </select>
                            <select name=" " id="minor10" className="hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option selected="selected" value="00"> Select </option>
                                <option value="01">General Power of Attorney related to immovable properties </option>
                                <option value="03">Power of Attorney with Consideration </option>

                            </select>
                            <select name=" " id="minor11" className="hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option selected="selected" value="00"> Select </option>
                                <option value="01">Release with Consideration Value </option>
                                <option value="02">Reconveyance by Govt in f/o Govt Employee </option>
                                <option value="03">Release by Housing federation in f/o Societies/Co-ops </option>
                                <option value="04">Reconveyance in f/o others </option>
                                <option value="05">Release without Consideration Value </option>

                            </select>
                            <select name=" " id="minor12" className="hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option value="00"> Select </option>
                                <option value="01">Settlement for Religious and Charitable purpose </option>
                                <option value="02">Settlement for Marriage (Kabinnama at Majlish) </option>
                                <option value="03">Settlement for marriage (Kabinnama) </option>
                                <option value="04">Settlement for other purpose </option>
                                <option value="05">Revocation of Settlement </option>
                                <option value="09">Settlement in favour of other than family members </option>

                            </select>
                            <select name=" " id="minor13" className="hidden  flex flex-wrap absolute w-[20rem] h-[1.9rem] ml-[10rem] ">
                                <option value="00"> Select </option>
                                <option value="01">Transfer of Lease/Deed of Assignment </option>
                                <option value="02">Transfer of leasehold right in favour of family members without consideration
                                </option>
                                <option value="10">Assignment of Lease by Govt./Govt. Authority/Govt. Undertaking/SPV </option>
                                <option value="11">Agreement for Assignment without possession [Full Stamp] </option>
                                <option value="12">Agreement for Assignment without possession </option>
                                <option value="14">Agreement for assignment with possession </option>

                            </select>



                        </div>


                    </div>
                    <div className="flex flex-wrap absolute border-[1px] rounded-[5px] h-[120px] w-[81%] mt-[1050px] ml-[20px]">
                        <div className="w-[100%] h-[40px] bg-blue-200 font-bold items-center">
                            <label for="" className="ml-[1rem]">Property to be Transacted: *</label>
                        </div>

                        <div className="flex flex-wrap absolute mt-[10rem] gap-[3rem] ml-[35rem]">
                            <table className="mt-[-10rem] ml-[-35rem] font-bold">
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="radio" id="land" name="land" className="w-[5rem] h-[1rem] bg-blue-400 text-white rounded-[.2rem] cursor-pointer" />
                                            <label for="" id="land"> Land / Land with Structure </label>
                                        </td>
                                        <td>
                                            <input type="radio" id="apartment" name="land" className="w-[5rem] h-[1rem] bg-blue-400 text-white rounded-[.2rem] cursor-pointer" />
                                            <label for="" id="apartment"> Apartment / Flat / Shop </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>



                    </div>
                    <div className="flex flex-wrap absolute mt-[1170px] border-[1px] rounded-[5px] h-[120px] w-[81%] ml-[20px]">
                        <label for="" className="mt-[2rem] ml-[2rem]">Expected Date of the Presentation of the deed</label>
                        <input type="date" className="w-[20rem] h-[2rem] ml-[5rem] mt-[2rem]" />

                    </div>


                    <div className="flex flex-wrap absolute mt-[1320px] border-[1px] rounded-[5px] h-[300px] w-[81%] ml-[20px]">
                        <div className="w-[100%] h-[40px] bg-yellow-500 font-bold items-center">
                            <label for="" className="ml-[1rem]">Whether the Land is (Tick the appropriate one)</label>
                        </div>

                        <div className="flex flex-wrap absolute mt-[5rem] ml-[10rem]">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="flex flex-wrap absolute mt-[2rem] w-[50rem]">
                                            <input type="radio" name="landUnder" />
                                            <label for="">Under Khatian No 1</label>
                                        </td>
                                        <td className="flex flex-wrap absolute mt-[4rem] w-[50rem]">
                                            <input type="radio" name="landUnder" />
                                            <label for=""> A Forest Land</label>
                                        </td>
                                        <td className="flex flex-wrap absolute mt-[6rem] w-[50rem]">
                                            <input type="radio" name="landUnder" />
                                            <label for="">Notified by any Govt. body for use by them </label>
                                        </td>

                                        <td className="flex flex-wrap absolute mt-[8rem] w-[50rem]">
                                            <input type="radio" name="landUnder" />
                                            <label for="">Thika Land</label>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>


                        </div>

                        <div id="part7-3">


                            <table>
                                <tbody>
                                    <tr>
                                        <td className="flex flex-wrap absolute mt-[7rem] w-[50rem] ml-[-50rem]">
                                            <input type="radio" name="landUnder" />
                                            <label for="">Tribal to Non Tribal Transfer</label>
                                        </td>
                                        <td className="flex flex-wrap absolute mt-[9rem] w-[50rem] ml-[-50rem]">
                                            <input type="radio" name="landUnder" />
                                            <label for="">Under acquisition of State Govt./Central Govt./KMDA</label>
                                        </td>
                                        <td className="flex flex-wrap absolute mt-[11rem] w-[50rem] ml-[-50rem]">
                                            <input type="radio" name="landUnder" />
                                            <label for="">Owned by Ministry of Defence</label>
                                        </td>
                                        <td className=" flex flex-wrap absolute mt-[13rem] w-[50rem] ml-[-50rem]">
                                            <input type="radio" name="landUnder" />
                                            <label for=""> None</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>

                <div className="flex flex-wrap mt-[-10rem] w-[81%] ml-[300px] border-[1px] h-[100px] border-blue-200">
                    <a ><input type="submit" className="text-1rem flex flex-wrap bg-blue-400 text-white mt-[2rem] w-[5rem] ml-[45rem]  h-[2rem] rounded-[.2rem] cursor-pointer" onClick={()=> navigate("/details")} /> </a>

                </div>




            </div>





        </div>
    )
}

export default FillReq

