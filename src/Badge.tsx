
type BadgeProps ={
    children:React.ReactNode;
}
function Badge({children}: BadgeProps){
    return(
        <>
        <span className="font-bold text-2xl">
            {children}
         </span>
            </>
    );
}
export default Badge;