import { AdminNotification } from "@/styles/alerts/notifications"
import Login from "../components/loginform"


const LoginForm=()=> {
  return (
    <>
    <AdminNotification>
    <h1>Only admins can login, if you want to be granted admin privilege, contact us through our email and we will reach out.</h1>
    </AdminNotification>
    <Login/>
    </>
  )
}

export default LoginForm