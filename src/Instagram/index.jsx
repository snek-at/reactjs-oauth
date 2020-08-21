//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React, { Component } from "react";
// Runtime type checking for React props and similar objects
import PropTypes from "prop-types";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBBtn, MDBIcon } from "mdbreact";

//> PopupWindow
// The window for handling oauth redirects
import PopupWindow from "../PopupWindow";
//> Utils
import { toQuery, guidGenerator } from "../utils";
//#endregion

//#region > Components
/**
 * @class A button that is used for GitHub OAuth
 */
class OAuth2Login extends Component {
  constructor(props) {
    super(props);

    this.onBtnClick = this.onBtnClick.bind(this);
    this.onRequest = this.onRequest.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onBtnClick = () => {
    const {
      authorizationUrl,
      clientId,
      scope,
      redirectUri,
    } = this.props;

    const search = toQuery({
      client_id: clientId,
      scope,
      redirect_uri: redirectUri,
      response_type: "code",
    });

    this.popup = PopupWindow.open(`${authorizationUrl}?${search}`);

    this.onRequest();

    this.popup.then(
      (data) => this.onSuccess(data),
      (error) => this.onFailure(error)
    );
  }

  onRequest = () => {
    const { onRequest } = this.props;

    onRequest();
  }

  async onSuccess(data) {
    if (!data.code) {
      return this.onFailure(new Error("'code' not found"));
    }

    let formData = new FormData();

    formData.append("code", data.code);
    formData.append("client_id", this.props.clientId);
    formData.append("client_secret", this.props.clientSecret);
    formData.append("redirect_uri", this.props.redirectUri);
    formData.append("grant_type", "authorization_code");

    /* POST request to get the access token from Instagram */
    await fetch("https://api.instagram.com/oauth/access_token", {
      method: "POST",
      body: formData,
    })
      .then(async (res) => await res.json())
      .then(async (res) => {
        let accessToken = res.access_token;

        const longTokenUrl = 
          `https://graph.instagram.com/access_token` +
          `?grant_type=ig_exchange_token` + 
          `&client_secret=${this.props.clientSecret}` +
          `&access_token=${accessToken}`;

        /* Get a long lived access token */
        await fetch(longTokenUrl)
          .then(async (res) => await res.json())
          .then(async (res) => {
            accessToken = res.access_token

            const usernameUrl = 
              `https://graph.instagram.com/me` +
              `?fields=username` + 
              `&access_token=${accessToken}`;

            /* Get username */
            await fetch(usernameUrl)
              .then(async (res) => await res.json())
              .then(async (res) => { 
                data = {"username": res.username, accessToken};

                const { onSuccess } = this.props;
    
                return onSuccess(data);
              });
          });
      });
  }

  onFailure = (error) => {
    const { onRequest } = this.props;

    onRequest(error);
  }

  render = () => {
    const { className } = this.props;
    const attrs = { onClick: this.onBtnClick };

    if (className) {
      attrs.className = className;
    }

    return (
      <MDBBtn color="ins" {...attrs}>
        <MDBIcon fab icon="instagram" size="lg" />
      </MDBBtn>
    );
  }
}
//#endregion

//#region > Properties
OAuth2Login.defaultProps = {
  scope: "user_profile,user_media",
  onRequest: () => {},
};

OAuth2Login.propTypes = {
  authorizationUrl: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  clientId: PropTypes.string.isRequired,
  clientSecret: PropTypes.string.isRequired,
  onRequest: PropTypes.func,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
  redirectUri: PropTypes.string.isRequired,
  scope: PropTypes.string,
};
//#endregion

//#region > Exports
//> Default Component
export default OAuth2Login;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Simon Prast
 */
