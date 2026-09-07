import Badge from "./Badge";
import Button from "./Button";

type CardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  bgColor: string;
   buttonColor: string;
};

function Card({name, price , description, features, bgColor, buttonColor}: CardProps){
    return(
        <>
        
  <div className={`${bgColor} flex flex-col gap-4  px-8 py-6 rounded-2xl shadow-lg hover:scale-90 ease-in-out hover:border-black`}>
      
      <Badge >{name}</Badge>
       <p className="text-sm">{description}</p>
         <div className="bg-white p-6 rounded-xl flex flex-col gap-5">
        
      <span  className="font-bold text-2xl text-center">{price}</span>
     
      <ol>
        {features.map((feature)=>{
           return( <li key={feature} className="flex gap-2">
             <span><svg xmlns="http://www.w3.org/2000/svg"
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor" 
              stroke-width="2"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              className="lucide lucide-circle-check-big"
              >
             <path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>
             </svg></span>{feature}</li>);
          
        })

        }</ol>
        <Button bgColor={buttonColor} >Purchase Plan</Button>
     </div>
     </div>
    </>
    );
}
export default Card;