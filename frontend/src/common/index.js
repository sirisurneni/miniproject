const backendDomain="http://localhost:3000"
const SummaryApi = {
    signUP : {
        url : `${backendDomain}/api/signup`,
        method : "post"
    },
    signIn : {
        url :`${backendDomain}/api/signin`,
        method : "post"
    }
}
export default SummaryApi