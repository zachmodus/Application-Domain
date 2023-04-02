const { checkAdminStatus, admin } = require('./admin');

// Set custom claim for admin role
const adminUid = 'fyu0X17xx2euRYJ6AR6W1vjJo6l2';
admin.auth().setCustomUserClaims(adminUid, { admin: true })
  .then(() => {
    console.log('Custom claim added to admin user account successfully!');
  })
  .catch((error) => {
    console.error('Error adding custom claim to admin user account:', error);
  });

// Set custom claim for manager role
const managerUid = 'GAmiFd4YozNi54q7738hi8C8fgC3';
admin.auth().setCustomUserClaims(managerUid, { manager: true })
  .then(() => {
    console.log('Custom claim added to manager user account successfully!');
  })
  .catch((error) => {
    console.error('Error adding custom claim to manager user account:', error);
  });

// Check admin status for the admin user
checkAdminStatus(adminUid);

// Check admin status for the manager user
checkAdminStatus(managerUid);
