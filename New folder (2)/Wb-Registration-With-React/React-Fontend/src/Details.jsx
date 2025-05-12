import { useNavigate } from "react-router-dom";



function Details(){
    const navigate = useNavigate(); 


    return(
     <div className="flex flex-wrap m-[1rem] ">
        <header>
                <img src="/public/HeaderIMG.jpg" alt="Hearder Image" className="flex flex-wrap w-[1840px]" />
            </header>
    <div className="flex flex-wrap border-[1px] border-[#2e6da4] text-[1.2rem] ">
        <div className="w-[1840px] h-[40px] text-white bg-[#2e6da4] flex flex-wrap relative items-center justify-center font-bold  ">
                    <p>Details of Seller </p>
        </div>
     </div>
     <div className="m-[20px] ">  <img src="/public/home.jpeg" alt="" onClick={() => navigate("/")} />
                    <div className="p-0 ml-[20px] ">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="/public/table1.gif" alt="" />
                                    </td>
                                    <td>
                                       Applicant & Transaction

                                       
                                    
                                        
                                    </td>
                                 
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                    <a href="">
                                        <img src="/public/WebResource.gif" alt="" />
                                       </a>

                                    </td>
                                    <td>
                                        Seller & Buyer
                                    </td>
                                    
                                </tr>
                            </tbody>
                        </table>
                        <div id="sellerBuyer" className="">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="/public/table5.gif" alt="" />
                                    </td>
                                    
                                <td className="flex ml-[.5rem]">
                                    <img src="/public/table2.gif" alt="" / >

                                    </td>
                                    <td>
                                        Seller

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                <td>
                                        <img src="/public/table5.gif" alt="" />
                                    </td>
                                <td className="flex ml-[.5rem]">
                                    <img src="/public/table2.gif" alt="" / >

                                    </td>
                                    <td>
                                        Buyer
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                <td>
                                        <img src="/public/table5.gif" alt="" />
                                    </td>
                                <td className="flex ml-[.5rem]">
                                <img src="/public/table4.gif" alt="" />

                                    </td>
                                    <td>
                                    Identifiers
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                    <a href="">
                                        <img src="/public/WebResource.gif" alt="" />
                                       </a>
                                    </td>
                                    <td>
                                        <a href="">Property Details
                                        </a>
                                    </td>
                                    
                                </tr>
                            </tbody>
                        </table>
                        <div  >
                            <table>
                                <tbody>
                                    <tr>
                                    <td>
                                        <img src="/public/table5.gif" alt="" />
                                    </td>
                                        <td className="flex ml-[.5rem] ">
                                        <img src="/public/table2.gif" alt="" />

                                        </td>
                                        <td>
                                            Land
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                    <td>
                                        <img src="/public/table5.gif" alt="" />
                                    </td>
                                        <td className="flex ml-[.5rem] ">
                                        <img src="/public/table4.gif" alt="" / >
                                        </td>
                                        <td>
                                            Structure
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="/public/table4.gif" alt="" />
                                    </td>
                                    <td>
                                        <a href="">Finalise
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>




                </div>


        </div>
    )
}

export default Details; 