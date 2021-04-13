# patfirefly

Welcome to my Adobe I/O Application!

## Installing aio CLI

Make sure you have Node.JS 12 and NPM 6.14 installed in order to install the `aio cli`. Once you have that installed run the following command to install aio cli `npm install -g @adobe/aio-cli`

**Note:** You may need to run this command as `sudo` (Linux | MacOSX) or `Administrator` (Windows) since you are installing a utility in the global section of npm

## Project Location

The project can be located at https://console.adobe.io/projects/49495/4566206088344624513/overview under the `AFTIA Solutions Inc Americas Partner Sandbox`

## Reading

- https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/overview.html?lang=en
- https://www.adobe.io/apis/experienceplatform/project-firefly/docs.html#!AdobeDocs/project-firefly/master/getting_started/first_app.md

## Setup

- Populate the `.env` file in the project root and fill it as shown [below](#env)

## Local Dev

- `aio app run` to start your local Dev server
- App will run on `localhost:9080` by default

By default the UI will be served locally but actions will be deployed and served from Adobe I/O Runtime. To start a
local serverless stack and also run your actions locally use the `aio app run --local` option.

The headers required to perform an API event are the following:

```
{
    "Authorization": "Bearer ....",
    "x-gw-ims-org-id": ""
}
```

The `Authorization` is the JWT token that is generated from the `aio login`
The IMS org can be retrieved by running `aio console org list`

## Test & Coverage

- Run `aio app test` to run unit tests for ui and actions
- Run `aio app test -e` to run e2e tests

## Deploy & Cleanup

- `aio app deploy` to build and deploy all actions on Runtime and static files to CDN
- `aio app undeploy` to undeploy the app

## Config

### `.env`

```bash
# This file must not be committed to source control

## please provide your Adobe I/O Runtime credentials
# AIO_RUNTIME_AUTH=
# AIO_RUNTIME_NAMESPACE=
```

### `manifest.yml`

- List your backend actions under the `actions` field within the `__APP_PACKAGE__`
package placeholder. We will take care of replacing the package name placeholder
by your project name and version.
- For each action, use the `function` field to indicate the path to the action
code.
- More documentation for supported action fields can be found
[here](https://github.com/apache/incubator-openwhisk-wskdeploy/blob/master/specification/html/spec_actions.md#actions).

#### Action Dependencies

- You have two options to resolve your actions' dependencies:

  1. **Packaged action file**: Add your action's dependencies to the root
   `package.json` and install them using `npm install`. Then set the `function`
   field in `manifest.yml` to point to the **entry file** of your action
   folder. We will use `parcelJS` to package your code and dependencies into a
   single minified js file. The action will then be deployed as a single file.
   Use this method if you want to reduce the size of your actions.

  2. **Zipped action folder**: In the folder containing the action code add a
     `package.json` with the action's dependencies. Then set the `function`
     field in `manifest.yml` to point to the **folder** of that action. We will
     install the required dependencies within that directory and zip the folder
     before deploying it as a zipped action. Use this method if you want to keep
     your action's dependencies separated.

## Debugging in VS Code

While running your local server (`aio app run`), both UI and actions can be debugged, to do so open the vscode debugger
and select the debugging configuration called `WebAndActions`.
Alternatively, there are also debug configs for only UI and each separate action.

## Typescript support for UI

To use typescript use `.tsx` extension for react components and add a `tsconfig.json` 
and make sure you have the below config added
```
 {
  "compilerOptions": {
      "jsx": "react"
    }
  } 
```

## Invoking Adobe Sign

Set the params to the following value

```
{
    "headers": {
        "auth": "Adobe Sign Auth Token",
        "user": "userid | email"
    },
    "agreement": {
        "fileInfos": [
          {
            "transientDocumentId": ""
          }
        ],
        "name": "",
        "participantSetsInfo": [
          {
            "memberInfos": [
              {
                "email": ""
              }
            ],
            "order": 1,
            "role": ""
          }
        ],
        "signatureType": "",
        "state": ""
      }
}
```

