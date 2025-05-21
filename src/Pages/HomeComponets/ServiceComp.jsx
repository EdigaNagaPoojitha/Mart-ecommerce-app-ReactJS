import React, { useContext } from "react";
import { ServiceData } from "../../Components/ContextApi";
export default function ServiceComp(){
    const serviceData=useContext(ServiceData)
    
    return(<>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-20">
      {serviceData.map((item, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
          style={{ backgroundColor: item.bg }}>
          
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
          <p className="text-sm text-gray-700">{item.subtitle}</p>
        </div>
      ))}
    </div>

        </>)
}