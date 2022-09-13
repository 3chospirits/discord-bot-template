// guild_perms     default permission required
// user_ids     users that can bypass the guild permission needed
// role_ids     roles that can bypass the guild permission needed


module.exports = {
    permissionLevels: [
        {
            name: "Administrator",
            level: 2,
            user_ids:[],
            role_ids:[],
            guild_perms:["Administrator"]
        },
        {
            name: "Moderator",
            level: 1,
            user_ids:[],
            role_ids:[],
            guild_perms:["ManageMessages"]
        },
        {
            name: "Member",
            level: 0,
            user_ids: [],
            role_ids: [],
            guild_perms: ["SendMessages"]
        }
    ]
}