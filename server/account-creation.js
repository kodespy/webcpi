Accounts.onCreateUser(function(options, user) {
    user.profile = options.profile || {};
    user.profile.idTeacher = options.idTeacher;
    return user;
});
