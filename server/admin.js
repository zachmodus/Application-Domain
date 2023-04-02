const admin = require('firebase-admin');
const serviceAccount = require('./service.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Check if a user is an admin
async function checkAdminStatus(uid) {
  try {
    const userRecord = await admin.auth().getUser(uid);
    const isAdmin = userRecord.customClaims && userRecord.customClaims.admin === true;

    if (isAdmin) {
      console.log('User is an admin');
      // Do something that only admins can do
    } else {
      console.log('User is not an admin');
      // Do something that non-admins can do
    }

  } catch (error) {
    console.error(error);
  }
}

// Check the user's role
async function checkUserRole(uid) {
  try {
    const userRecord = await admin.auth().getUser(uid);
    const role = userRecord.customClaims && userRecord.customClaims.role;

    if (role) {
      console.log(`User has role ${role}`);
      // Do something based on the user's role
    } else {
      console.log('User does not have a role');
      // Do something for users without a role
    }

  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  admin,
  checkAdminStatus,
  checkUserRole
};
