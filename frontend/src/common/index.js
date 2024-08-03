const backendDomain="http://localhost:3000"
const SummaryApi = {
    signUP : {
        url : `${backendDomain}/api/signup`,
        method : "post"
    },
    signIn : {
        url :`${backendDomain}/api/signin`,
        method : "post"
    },
    current_user:{
        url:`${backendDomain}/api/user-details`,
        method : "get"
    },
    logout_user:{
        url : `${backendDomain}/api/userLogout`,
        method:'get'
    },
    allUser:{
        url : `${backendDomain}/api/all-user`,
        method : 'get'
    }
    
}
export default SummaryApi