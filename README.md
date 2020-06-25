
<p align="center">
  <a href="https://snek.at/" target="_blank" rel="noopener noreferrer">
    <img src="https://avatars2.githubusercontent.com/u/55870326?s=400&u=c6c7f06305ddc94747d474850fde7b2044f53838&v=4" alt="SNEK Logo" height="150">
  </a>
</p>

<h3 align="center">SNEK - Social Network for Engineers and Knowledged</h3>
<p align="center">
The SNEK project is an attempt to create a transparent, open-source non-profit platform that allows engineers to categorize and compare. It should enable engineers from adjacent fields to visualize each other's skills through visualization and project identification.

  <br>
Reactjs-OAuth serves as the component provider for all kind of OAuth authentications and is easily extandable for all kind of OAuth providers.
  <br>
  <br>
  <a href="https://github.com/snek-at/reactjs-oauth/issues/new?template=bug_report.md">Report bug</a>
  ·
  <a href="https://github.com/snek-at/reactjs-oauth/issues/new?template=feature_request.md">Request feature</a>
  ·
  <a href="https://www.overleaf.com/read/bcxwhwbhrmps">Documentation</a>
  <br>
  <br>
  <a href="https://www.codacy.com/app/kleberbaum/reactjs-oauth"></a>
</p>
 
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4f7f797df27a49e3b0f5d9c869c9886d)](https://www.codacy.com/gh/snek-at/reactjs-oauth?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=snek-at/reactjs-oauth&amp;utm_campaign=Badge_Grade)
## Table of contents

-   [Installation](#installation)
-   [Features](#features)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [Bugs and feature requests](#bugs-and-feature-requests)
-   [Versioning](#versioning)
-   [Creators](#creators)
-   [Thanks](#thanks)
-   [Copyright and license](#copyright-and-license)

## [](#installation)Installation
The system can be installed using the ```npm install``` command:
```bash
$ npm install reactjs-oauth
```

## [](#features)Features
-   GitHub OAuth2 Authentication

## [](#usage)Usage
### Import Component
```javascript
import GitHubOAuth from "reactjs-oauth";
```
### Handeling Functions
```javascript
 // Handle a successful oauth request
 oauthGitHubSuccess = (response) => {
    console.log(response);
 };
  
 // Handle a failed oauth request
 oauthGitHubFailure = (response) => {
   console.log(response);
 };
```
### Render Component
```javascript
<GitHubOAuth
  authorizationUrl={YourAuthUrl}
  clientId={YourClienId}
  clientSecret={YourClientSecret}
  redirectUri={YourRedirectUri}
  onSuccess={this.oauthGitHubSuccess}
  onFailure={this.oauthGitHubFailure}
/>
```


## [](#contributing)Contributing
![GitHub last commit](https://img.shields.io/github/last-commit/snek-at/reactjs-oauth) ![GitHub issues](https://img.shields.io/github/issues-raw/snek-at/reactjs-oauth) ![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/snek-at/reactjs-oauth?color=green)

Please read through our [contributing guidelines](https://github.com/snek-at/front/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

All code should conform to the [Code Guide](https://github.com/snek-at/tonic/blob/master/STYLE_GUIDE.md), maintained by [SNEK](https://github.com/snek-at).

## [](#bug-and-feature-requests)Bugs and feature requests

Do you have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea has not been addressed yet, [please open a new issue](https://github.com/snek-at/package-template/issues/new/choose).

## [](#versioning)Versioning
![GitHub package.json version](https://img.shields.io/github/package-json/v/snek-at/reactjs-oauth)

For reasons of transparency concering our release cycle and in striving to maintain backward compatibility, this repository is maintained under [the Semantic Versioning guidelines](https://semver.org/). Some minor screw ups aside, we try to adhere to those rules whenever possible.

## [](#creators)Creators
<table border="0">
	<tr>
    <td>
			<a href="https://github.com/pinterid">
				<img src="https://avatars.githubusercontent.com/pinterid?s=100" alt="Avatar pinterid">
			</a>
		</td>	
		<td>
		<a href="https://github.com/schettn">
			<img src="https://avatars.githubusercontent.com/schettn?s=100" alt="Avatar schettn">
		</a>
		</td>
	</tr>
	<tr>
    <td><a href="https://github.com/pinterid">David Pinterics</a></td>
		<td><a href="https://github.com/schettn">Nico Schett</a></td>
	</tr>
</table>

## [](#thanks)Thanks
We do not have any external contributors yet, but if you want your name to be here, feel free to [contribute to our project](#contributing).

## [](#copyright-and-license)Copyright and license
![GitHub repository license](https://img.shields.io/badge/license-EUPL--1.2-blue)

SPDX-License-Identifier: (EUPL-1.2)
Copyright © 2019-2020 Simon Prast
