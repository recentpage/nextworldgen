import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '4a833746a915b57581a3',
            clientSecret: '418a6e5a0e35f8c710e8050333ffa4f75b1f6c81'
        })
    ]
};

export default nextAuth(authOptions);