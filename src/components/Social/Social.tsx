import React from "react";
import { magic } from "../../lib/magic";

async function handleLoginWithSocial(provider: any) {
  await magic.oauth.loginWithRedirect({
    provider,
    redirectURI: new URL("/callback", window.location.origin).href, // required redirect to finish social login
  });
}

const Social = () => {
  const providers = ["apple", "google", "facebook", "github"];
  return (
    <>
      <p>Social Authentication with Magic Link SDK</p>
      <div className="row justify-content-center">
        <div className="col-4 text-center">
          {providers.map((provider) => {
            return (
              <div className="m-2" key={provider}>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => {
                    handleLoginWithSocial(provider);
                  }}
                  key={provider}
                  style={{ width: "100px" }}
                >
                  {provider.replace(/^\w/, (c) => c.toUpperCase())}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Social;
