App.js

This file contains the centerpiece of the application in React. It is in charge of defining what an application user will see the moment the application is opened. It displays the application layout , buttons, texts, and othe ui stuff on the screen.
Makes use of the StatusBar component to set the device's upper status bar (battery, time, WiFi, etc.) on the screen.
Uses StyleSheet (CSS) , to style the application.
Makes use of the core React Native UI component, the View, to cluster and layout the interface items.
This is the file where the custom components for this application (for example, custom course code, goals and layouts) are imported and rendered.
I customized App.js by adding course information and learning goals to the application to make it specific for the lab exercise.

index.js

This is the application entry point. It is responsible for defining what component will be opened first when the application is started.
Uses AppRegistry.registerComponent to set the root component (App).
Without this file, the application would have no way to know which component to run.
This is a setting that is almost always untouched, though its importance is undeniable.
Relative to other files, it is typically much smaller and serves mainly as a “bridge” between React Native and the backbone of the application which is App.js.

Package.json –

Keeps a record of all the dependencies (React, React Native, and the entire slew of testing libraries) and retains the scripts (such as npm start, npm run android, npm run ios, etc).

android/app/build.gradle –

- Configuration file for the build of the android application.

Sets license and the aforementioned versions.

Sets identifier for the application.

Private and administrative dependencies and signing instructions for android are also included.

ios/[ProjectName]/Info.plist –

App metadata is made up of the description, bundle ID, and display name, as well as the supported device orientations.

Set the necessary permissions like the connection to the internet, camera, and microphone.

It's worth noting that the entire IOS application will fail to run without this file correctly configured.

rc/components/ contains reusable UI components that can be shared across multiple screens to maintain consistency and reduce duplication.

src/screens/ holds the screen components, each representing a distinct view or page in the application.

src/services/ includes API calls, data fetching logic, and configuration services needed to interact with external resources.

src/utils/ stores utility functions that provide commonly used helper methods throughout the app.

src/constants/ defines application-wide constants such as static values, enumerations, and configuration keys.

Development Scripts

npm run dev:android launches the app in development mode specifically for Android devices or emulators.

npm run lint checks the codebase for style violations and potential errors according to the linting rules.

npm run format automatically formats the code to ensure consistent styling across the project.

Environment Configuration

.env.development contains environment variables and settings specific to development builds.

.env.production contains environment variables and settings used for production builds to optimize performance and security.

