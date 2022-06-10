import React, { useState, useEffect } from "react";
import { magic } from '../../lib/magic';
import SocialLogins from './social-logins';

// If isLoggedIn is true, set the UserContext with user data
// Otherwise, set it to {user: null}
// const [user, setUser] = useState();
// useEffect(() => {
//   setUser({ loading: true });
//   magic.user.isLoggedIn().then(isLoggedIn => {
//     return isLoggedIn ? magic.user.getMetadata().then(userData => setUser(userData)) : setUser({ user: null });
//   });
// }, []);

async function handleLoginWithSocial(provider: any) {
  await magic.oauth.loginWithRedirect({
    provider,
    redirectURI: new URL('/callback', window.location.origin).href, // required redirect to finish social login
  });
}

// The redirect contains a `provider` query param if the user is logging in with a social provider
// useEffect(() => {
//   const provider = new URLSearchParams(props.location.search).get('provider');
//   // provider ? finishSocialLogin() : finishEmailRedirectLogin();
//   finishSocialLogin();
// }, [props.location.search]);

// `getRedirectResult()` returns an object with user data from Magic and the social provider
// const finishSocialLogin = async () => {
//   const result = await magic.oauth.getRedirectResult();
//   // Set the UserContext to the now logged in user
//   const userMetadata = await magic.user.getMetadata();
//   console.log(userMetadata);
//   // await setUser(userMetadata);
// };
// const logout = () => {
//   magic.user.logout().then(() => {
//     setUser({ user: null });
//     history.push('/login');
//   });
// };

const Social = () => {
  return <div>
      <h3>Social Authentication with Magic Link SDK</h3>
      <SocialLogins onSubmit={handleLoginWithSocial} />
      </div>;
};

export default Social;