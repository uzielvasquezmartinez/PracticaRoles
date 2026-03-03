function ProtectedRoutes(){
if(isAllowed = false){
return <Navigate to = "/login" />
}
return <Outlist />
}
export default ProtectedRoutes;