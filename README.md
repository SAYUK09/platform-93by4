# **Platform 93by4**: Admission Portal 👨‍💻 for **neog.camp**

**Platform 93by4** is the Admission Portal for the [neoG camp Cohort](neog.camp).

## **Get started** 💻

To spin up the development environment, follow the following steps.

Curious about how to contribute? Please read more about forking, raising a PR etc. in the [contributing guide](/CONTRIBUTING.md)

### **Get the latest version of the project**

**Step 1** : Clone the repository

```
git clone <repo-name>
```

**Step 2**: Checkout to develop branch

```
git checkout develop
```

**Step 3**: Pull the latest changes from develop

```
git pull
```

**Step 4**: Work off a different feature branch from `develop`

```
git checkout <name/feature-name>
```

### **Setup Client**

```
cd client && yarn run dev
```

This should run client on **localhost:3000**

### **Setup Server**

**Step 1**: Setup up local MongoDB

Create a MongoDB server running on the local environment.

**Step 2**: Create an account on [Mailtrap](mailtrap.io).

We use Mailtrap for test emails for development. Note the:

- `EMAIL_HOST`
- `EMAIL_USERNAME`
- `EMAIL_PASSWORD`
- `EMAIL_PORT`

**Step 3**: Initialize a .env file in the root directory

Add following content in the .env file

```
DB_LOCAL=mongodb+srv://.../
PORT=5000
EMAIL_HOST=<host-from-mailtrap>
EMAIL_USERNAME=<username-from-mailtrap>
EMAIL_PASSWORD=<password-from-mailtrap>
EMAIL_PORT= <port-from-mailtrap>
JWT_SECRET= <jwt-secret-here>
JWT_EXPIRES_IN= <expire-time>
```

**Step 4**: Run the server

```
yarn run dev
```

This should run the server on **localhost:5000** and also should establish a connection to the database.

## **Tech Stack 🛠**

- Frontend Framework: **Next.js**
- UI Library: **Chakra-UI**
- UI Development Tool: **Storybook.js**
- Backend Framework: **Express.js**
- Runtime Environment: **Node.js**
- Database: **MongoDB** + **Mongoose**

## **Contributing 💖**

If you are interested to contribute to this project, any sort of contributions are highly appreciated and welcomed. Please read the [Contributing Guide](/CONTRIBUTING.md) to learn more on how to contribute to the project, propose bug fixes or improvements and how to make a PR to get your changes merged to **Platform94by4**.
