import { useAuth } from "../store/auth";

export const About = () => {

    const { user } = useAuth();




    return <h1 style={{ paddingTop: 10 + 'em'
}} >Welcome, {user ? `${user.username} to our website` : `to our website`}</h1>
}