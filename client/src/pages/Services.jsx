import { useAuth } from "../store/auth";

export const Services = () => {
    
    const { services } = useAuth();
    console.log(services);
    return(
        <>
            { 
                services.map((curElem, index) => {
                const { price, description, provider, service } = curElem;
                return (
                    <div className="card" key={index}>
                        <h1>{ price }</h1>
                        <h1>{description}</h1>
                        <h1>{provider}</h1>
                        <h1>{service}</h1>
                    </div>
                )
                })
            }
    
    <h1>Services</h1>
    </>
    );
}