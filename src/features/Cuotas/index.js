import { useState } from "react"
import { useDispatch } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { showNotification } from "../common/headerSlice"
import { BanknotesIcon } from "@heroicons/react/24/outline";

const INITIAL_Cuotas_LIST = [
    { name: "Juan ramon Perez", icon: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", isActive: true, description: "urbanizacion miraflores santiago sectores." },
    { name: "Facebook", icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png", isActive: false, description: "Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook." },
    { name: "Linkedin", icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png", isActive: true, description: "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps." },
    { name: "Google Ads", icon: "https://cdn-icons-png.flaticon.com/512/2301/2301145.png", isActive: false, description: "Google Ads is an online advertising platform developed by Google, where advertisers bid to display brief advertisements, service offerings" },
    { name: "Gmail", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png", isActive: false, description: "Gmail is a free email service provided by Google. As of 2019, it had 1.5 billion active users worldwide." },
    { name: "Salesforce", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968880.png", isActive: false, description: "It provides customer relationship management software and applications focused on sales, customer service, marketing automation." },
    { name: "Hubspot", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968872.png", isActive: false, description: "American developer and marketer of software products for inbound marketing, sales, and customer service." },
]


function Cuotas() {

    const dispatch = useDispatch()

    const [CuotasList, setCuotasList] = useState(INITIAL_Cuotas_LIST)


    const updateCuotasStatus = (index) => {
        let Cuotas = CuotasList[index]
        setCuotasList(CuotasList.map((i, k) => {
            if (k === index) return { ...i, isActive: !i.isActive }
            return i
        }))
        dispatch(showNotification({ message: `${Cuotas.name} ${Cuotas.isActive ? "disabled" : "enabled"}`, status: 1 }))
    }


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                {
                    CuotasList.map((i, k) => {
                        return (
                            <TitleCard key={k} title={i.name} topMargin={"mt-2"}>

                                <div className="flex">
                                    <BanknotesIcon className='w-20 h-20 inline-block mr-4 text-green-400' />
                                    <div>
                                        <p className="flex font-medium">
                                            {/* <img alt="icon" src={i.icon} className="w-12 h-12 inline-block mr-4" /> */}
                                            Descripcion: <span className="font-normal" > {i.description}</span>
                                        </p>
                                        <p className="flex font-medium">
                                            {/* <img alt="icon" src={i.icon} className="w-12 h-12 inline-block mr-4" /> */}
                                            Fecha: <span className="font-normal" > 19/01/2023</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-2">
                                    <p className="p-2 font-semibold">
                                        Monto: $ <span className="font-normal  text-blue-600 text-md">2000</span>
                                    </p>
                                    <p className="p-2 font-semibold">
                                        Interes: $ <span className="font-normal  text-blue-600 text-md">2000</span>
                                    </p>
                                    <p className="p-2 font-semibold">
                                        Cuota: $ <span className="font-normal  text-blue-600 text-md">2000</span>
                                    </p>
                                    <p className="p-2 font-semibold">
                                        #Cuota:  <span className="font-normal  text-blue-600 text-md">2</span>
                                    </p>

                                </div>
                                {/* <div className="mt-6 text-right">
                                    <input type="checkbox" className="toggle toggle-success toggle-lg" checked={i.isActive} onChange={() => updateCuotasStatus(k)} />
                                </div> */}
                                <div className="dropdown dropdown-top dropdown-end  flex justify-end">
                                    <label tabIndex={0} className="btn btn-primary m-1 ">Pagar</label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Todo</a></li>
                                        <li><a>Parcial</a></li>
                                        <li><a>No Pago</a></li>

                                    </ul>
                                </div>

                            </TitleCard>
                        )

                    })
                }
            </div>
        </>
    )
}

export default Cuotas