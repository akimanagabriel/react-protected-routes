import { Navigate, Outlet } from "react-router-dom"

const Protected = ({ isLogged }) => {
    return isLogged ? <Outlet /> : <Navigate to={'/'} />
}

export default Protected