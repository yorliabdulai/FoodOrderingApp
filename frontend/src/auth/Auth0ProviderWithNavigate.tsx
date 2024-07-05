type Props = {
 children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({children}:Props) => {
 const domain = import.meta.env.VITE_AUTH0_DOMAIN;
 const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
 const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;


}

export default Auth0ProviderWithNavigate;