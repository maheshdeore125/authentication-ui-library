import React from "react";
import { magic } from "../../lib/magic";

class CallbackReturn extends React.Component {
  constructor(props: any) {
    super(props);
  }
  state = { email: "", issuer: "" };

  async componentDidMount() {
    let result = await magic.oauth.getRedirectResult();
    // console.log("Result::", result);
    let userMetadata = await magic.user.getMetadata();
    // console.log("UserMetaData::", userMetadata);
    this.setState(userMetadata);
  }

  render() {
    return (
      <>
        <p>Social Authentication with Magic Link SDK</p>
        <div>
          <div className="label">Email</div>
          <div className="profile-info">{this.state.email}</div>

          <div className="label">User Id</div>
          <div className="profile-info">{this.state.issuer}</div>
        </div>
      </>
    );
  }
}
export default CallbackReturn;
