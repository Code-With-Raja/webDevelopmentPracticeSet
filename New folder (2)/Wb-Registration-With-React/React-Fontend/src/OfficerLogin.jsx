import { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
 



const Popup1 = ({onClose}) =>{
     

    return (
    <div   className="w-[200px] flex flex-wrap absolute mt-[-40rem]  ">
    <div className="border-[1px] border-solid rounded-md bg-white ml-[35rem]  p-[20px] border-zinc-300 w-[760px] h-[180px]">
        <span onClick={onClose} className="text-zinc-800 mt-[-2.5rem] float-right text-[35px] font-bold hover: text-zinc-900 text-decoration-none cursor-pointer font-bolder">&times;</span>
        <div className="flex bg-sky-400 mt-[-4rem] w-[720px] h-[70px] "> <span  className="flex ml-[-2rem] text-[2.5rem] text-white font-bolder"> <img  className="flex text-[2rem] ml-[2rem] w-[50px] h-[50px] cursor-pointer"
                    src="/public/Grips.png" alt=""/>

                You are going to move from this site. </span> </div>
        <div className="border-2 border-solid border-gray-700 mt-[20px] w-[720px] "></div>


        <button onClick={onClose} class="flex flex-wrap border-solid justify-center items-center rounded-md text-[15px] font-bold bg-white ml-[75%] mt-[15px] w-[80px] h-[30px] cursor-pointer hover:cursor-pointer hover:bg-zinc-200">Cencel</button>

        <button onClick={()=>{window.open('https://www.wbifms.gov.in/GRIPS/v2/#/', '_blank');}}  class="flex flex-wrap border-solid justify-center items-center rounded-md text-[15px] font-bold bg-blue-800 ml-[92%] mt-[-2rem] w-[50px] h-[30px] cursor-pointer hover:cursor-pointer hover:bg-zinc-200">OK</button>


    </div>
    </div>
    )
}
const Popup2 = ({onClose}) =>{
     

    return (
    <div   className="w-[200px] flex flex-wrap absolute mt-[-35rem] ml-[-14rem]  ">
    <div className="border-[1px] border-solid rounded-md bg-white ml-[35rem]  p-[20px] border-zinc-300 w-[760px] h-[180px]">
        <span onClick={onClose} className="text-zinc-800 mt-[-2.5rem] float-right text-[35px] font-bold hover: text-zinc-900 text-decoration-none cursor-pointer font-bolder">&times;</span>
        <div className="flex bg-sky-400 mt-[-4rem] w-[720px] h-[70px] "> <span  className="flex ml-[-2rem] text-[2.5rem] text-white font-bolder"> <img  className="flex text-[2rem] ml-[2rem] w-[50px] h-[50px] cursor-pointer"
                    src="/public/Grips.png" alt=""/>

                You are going to move from this site. </span> </div>
        <div className="border-2 border-solid border-gray-700 mt-[20px] w-[720px] "></div>


        <button onClick={onClose} class="flex flex-wrap border-solid justify-center items-center rounded-md text-[15px] font-bold bg-white ml-[75%] mt-[15px] w-[80px] h-[30px] cursor-pointer hover:cursor-pointer hover:bg-zinc-200">Cencel</button>

        <button onClick={()=>{ window.open('http://www.wbfin.nic.in/', '_blank')}}  class="flex flex-wrap border-solid justify-center items-center rounded-md text-[15px] font-bold bg-blue-800 ml-[92%] mt-[-2rem] w-[50px] h-[30px] cursor-pointer hover:cursor-pointer hover:bg-zinc-200">OK</button>


    </div>
    </div>
    )
}
const Popup3 = ({onClose}) =>{
     

    return (
    <div   className="w-[200px] flex flex-wrap absolute mt-[-35rem] ml-[-32rem] ">
    <div className="border-[1px] border-solid rounded-md bg-white ml-[35rem]  p-[20px] border-zinc-300 w-[760px] h-[180px]">
        <span onClick={onClose} className="text-zinc-800 mt-[-2.5rem] float-right text-[35px] font-bold hover: text-zinc-900 text-decoration-none cursor-pointer font-bolder">&times;</span>
        <div className="flex bg-sky-400 mt-[-4rem] w-[720px] h-[70px] "> <span  className="flex ml-[-2rem] text-[2.5rem] text-white font-bolder"> <img  className="flex text-[2rem] ml-[2rem] w-[50px] h-[50px] cursor-pointer"
                    src="/public/Grips.png" alt=""/>

                You are going to move from this site. </span> </div>
        <div className="border-2 border-solid border-gray-700 mt-[20px] w-[720px] "></div>


        <button onClick={onClose} class="flex flex-wrap border-solid justify-center items-center rounded-md text-[15px] font-bold bg-white ml-[75%] mt-[15px] w-[80px] h-[30px] cursor-pointer hover:cursor-pointer hover:bg-zinc-200">Cencel</button>

        <button onClick={()=>{ window.open('https://bsk.wb.gov.in/', '_blank');}}  class="flex flex-wrap border-solid justify-center items-center rounded-md text-[15px] font-bold bg-blue-800 ml-[92%] mt-[-2rem] w-[50px] h-[30px] cursor-pointer hover:cursor-pointer hover:bg-zinc-200">OK</button>


    </div>
    </div>
    )
}

 



const OfficersLogin = () =>{
    const [showpopup, setshowpopup] = useState(false);
    const [showpopup1, setshowpopup1] = useState(false);
    const [showpopup2, setshowpopup2] = useState(false);
    const navigate =  useNavigate();
    const { register, handleSubmit, reset, watch,  formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();
    const onSubmit = async (data) => {
        try {
          const response = await fetch("http://localhost:5000/form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data), 
          });
    
          const result = await response.json();
          console.log("Saved:", result);
          reset(); // Clear form after submission
        } catch (error) {
          console.error("Error:", error);
        }
      };
    const captcha = () => {
        let character = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
        let cap = '';
        for (let i = 0; i < 6; i++) {
            let store = character.charAt(Math.floor(Math.random() * character.length));
            cap = cap + store;

        }

        return cap
    }

    const [Captcha, setCaptcha] = useState(captcha());
    const [userInput, setUserInput] = useState();
    const [message, setMessage] = useState();

    const validCaptcha = () => {
        if (userInput === Captcha) {
            setMessage("Captcha Matched !")
        } else {
            setMessage("Incorrect Captcha, Try Again.")
        }
    };

    const refreshCaptcha = () => {
        setCaptcha(captcha());
        setUserInput("");
        setMessage("");
    }

  
    



    return (
        <>
        <div  className="pt-[.2rem] pl-[.5rem] pr-[.5rem] pb-[.5rem] ">
            <header>
                <img className="w-[100%] pt-[5px] pb-[2px] ring-blue-500 m-0 p-0" src="/public/HeaderIMG.jpg" alt="Hearder Image" />
            </header>
            <nav className="nav-1 flex flex-wrap  items-center justify-between bg-cyan-700 h-[3rem] px-4">

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


                <div id="mynavbar" class="hidden lg:flex items-center w-full justify-between flex-wrap lg:flex-nowrap lg:gap-8">
                    <ul class="nav navbar-nav flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-6 list-none p-0 m-0 w-full lg:w-auto">
                        <li><a onClick={() => navigate("/")} class="text-white hover:text-gray-300 hover:cursor-pointer">Home</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">About Us</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Contacts</a></li>
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


                <div class="flex flex-wrap ml-[-50rem]  items-center gap-4">
                    <a href="#" className="w-4 h-4 bg-zinc-900 rounded-md"></a>
                    <a href="#" className="w-4 h-4 bg-stone-300 rounded-md"></a>
                    <a href="#" className="text-white">Officers Login</a>
                </div>
            </nav>




            <div className=" flex flex-wrap border-[.02rem] border-blue-500 rounded-lg ">

                <div className="logIn flex flex-wrap flex-auto flex-row w-[100%] h-[2rem] bg-sky-600 justify-center items-center text-white font-bold text-[1rem] mt-[.2rem]">
                    <h1 class="flex flex-wrap ">Log In</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="body flex flex-col flex-wrap justify-center ml-[30rem] mt-[2rem] gap-[2rem] w-[100%] h-[100%] ">
                    {isSubmitting && <div className="flex flex-wrap ml-[30rem] text-red-600 font-bold text-[1.2rem] ">Loading....</div> } 
                    <div className=" flex flex-wrap flex-auto text-[1rem] font-bold ">
                        Username:
                        <input placeholder="Enter Username" {...register("username", { required: { value: true, message: "This is required" }, minLength: { value: 4, message: "Min Length 4" }, maxLength: { value: 20, message: "Max Length 20" } })} type="text" className="flex flex-wrap ml-[15rem] w-[30rem] h-[2rem] rounded-md hover:shadow hover:shadow-blue-800/50 hover:ring-blue-500 hover:ring-[.05rem] hover:ring-offset-blue-500 p-[.6rem] text-[1rem] hover:bg-blend-color outline-none border-[.05rem] border-zinc-300 " />
                        {errors.username && <div className="text-red-500 ml-[1rem]">{errors.username.message}</div>}
                    </div>
                    <div className=" flex flex-wrap flex-auto text-[1rem] font-bold ">
                        Password:
                        <input placeholder="Enter Password" {...register("password", { required: { value: true, message: "This is required" }, minLength: { value: 4, message: "Min Length 4" }, maxLength: { value: 10, message: "Max Length 10" } })} type="text" className="flex flex-wrap ml-[15.5rem] w-[30rem] h-[2rem] rounded-md hover:shadow hover:shadow-blue-800/50 hover:ring-blue-500 hover:ring-[.05rem] hover:ring-offset-blue-500 p-[.6rem] text-[1rem] hover:bg-blend-color outline-none border-[.05rem] border-zinc-300 " />
                        {errors.password && <div className="text-red-500 ml-[1rem]">{errors.password.message}</div>}
                    </div>
                    <div className=" flex flex-wrap flex-auto text-[1rem] font-bold ">
                        Security Code:
                        <input value={userInput} onChange={(e) => setUserInput(e.target.value)} type="text" className="flex flex-wrap ml-[13.5rem] w-[30rem] h-[2rem] rounded-md hover:shadow hover:shadow-blue-800/50 hover:ring-blue-500 hover:ring-[.05rem] hover:ring-offset-blue-500 p-[.6rem] text-[1rem] hover:bg-blend-color outline-none border-[.05rem] border-zinc-300 " placeholder="Enter Captcha" />
                        {errors.security && <div className="text-red-500 ml-[1rem]">{errors.security.message}</div>}

                    </div>
                    <div className="  flex flex-wrap flex-auto w-[8rem] h-[2rem] ml-[20rem] bg-blue-500 items-center items-center justify-center text-white font-bold rounded-md"> {Captcha} </div>
                    <div onClick={refreshCaptcha} className="flex flex-wrap flex-row mt-[-4rem] ml-[29rem] cursor-pointer"> <img src="/public/refresh.png" alt="" /> </div>
                    <input onClick={validCaptcha} type="button" value="Varify" className="flex flex-wrap bg-orange-500 w-[6rem] h-[2rem] absolute mt-[7rem] ml-[32rem] rounded-md cursor-pointer " />
                    <p className="flex flex-wrap absolute mt-[7rem] ml-[40rem] font-bold "> {message}</p>


                    <input  disabled= {isSubmitting} className=" flex flex-wrap flex-row w-[5rem] h-[2rem] ml-[30rem] bg-blue-700 text-white rounded-md font-bold cursor-pointer" type="submit" />
                    {isSubmitSuccessful && <div className="flex absolute flex-wrap mt-[13rem] ml-[40rem] text-red-600 text-[1.5rem] ml-[30rem] "> Log In Successful </div> }
                    <input type="button" value="Forget/Reset password" class="flex flex-wrap flex-row text-blue-600 ml-[-20rem] mt-[-2rem] cursor-pointer " />

                </form>

            </div>



            <div className="footer flex flex-wrap flex-auto mt-[.5rem] border-[1.5px] border-zinc-500 gap-[70px] bg-zinc-100 w-[100%]">
            <div className="transition-opacity"> <img  onClick={()=> setshowpopup(true)}  src="/public/grips_logo3.png" alt="" className="flex flex-wrap  w-[150px] h-[80px] border-r-2 border-zinc-400 items-center cursor-pointer  " /> 
                    {showpopup && <Popup1 onClose={()=> setshowpopup(false)} /> }
                </div>
                <div className="flex flex-wrap flex-auto"> <img onClick={()=> setshowpopup1(true)}  id="wbfin" src="/public/wbfin_logo.png" alt="" className="flex flex-wrap w-[150px] h-[80px] border-r-2 border-zinc-400 items-center cursor-pointer  " />
                {showpopup1 && <Popup2 onClose={()=> setshowpopup1(false)} /> }
                
                </div>
                <div className="flex flex-wrap flex-auto">
                    <img onClick={()=> setshowpopup2(true)} id="bsk" src="/public/bsk.png" alt="" className="flex flex-wrap w-[150px] h-[80px] border-r-2 border-zinc-400 items-center cursor-pointer" />
                    {showpopup2 && <Popup3 onClose={()=> setshowpopup2(false)} /> }
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


            </div>


        </>
    )

}



export default OfficersLogin