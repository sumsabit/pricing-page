
import Card from "./Card.tsx"
function App() {
  return(
   <>
      <div>
        <h1 className="font-bold text-center text-4xl mt-20 text-gray-900">Choose the Perfect Pricing Plan</h1>
        <p className="text-center">7 Days free trial. No credit card required  </p>
    </div>
    <div  className="flex flex-row gap-10 mt-20 justify-center">
    <Card
    name="Free"
    price="$0"
    description="for small campanies"
    bgColor="bg-pink-100"
     buttonColor="bg-pink-100"
    features={[
      "AI advisor for day",
      "2 auto tracking",
      " 1 Day trasaction clearing",
      "  24/7 Customer support ",
    
    ]}
/>
    <Card
    name="Advance Plan"
    price="$150"
    description="for small campanies"
    bgColor="bg-red-100"
    buttonColor="bg-red-100"
    features={[
      "AI advisor for day",
      "unlimited auto tracking",
      " 7 Day trasaction clearing",
      "priority Customer support ",
    
    ]}
/>
    <Card
    name="Pro Plan"
    price="$180"
    description="for small campanies"
    bgColor="bg-blue-100"
    buttonColor="bg-blue-100"
    features={[
      "AI advisor for day",
      "unlimited tracking",
      "7 trasaction clearing",
      "priority Customer support ",
    
    ]}
/>
</div>
</>
  );

}

export default App;
