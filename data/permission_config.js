// user_ids     match any
// role_ids     match any
// guild_perms  match all


module.exports = {
    permissionLevels: [
        {
            name: "Owner",
            level: -1,
            user_ids:[],
            role_ids:[],
            guild_perms:[]
        },
        {
            name: "Administrator",
            level: 0,
            user_ids:[],
            role_ids:[],
            guild_perms:["ADMINISTRATOR"]
        },
        {
            name: "Moderator",
            level: 1,
            user_ids:[],
            role_ids:[],
            guild_perms:["MANAGE_MESSAGES"]
        },
        {
            name: "Member",
            level: 2,
            user_ids: [],
            role_ids: [],
            guild_perms: ["SEND_MESSAGES"]
        }
    ]
}