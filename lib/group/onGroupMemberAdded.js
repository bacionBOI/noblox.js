var getGroup = require("./getGroup").func

exports.required = ['groupId','goalCount']

exports.func = function(args){
    return getGroup({groupId: args.groupId}).then(function(group){
        var currentCount = group.memberCount
        if(group.memberCount < currentCount){
            return {newCount: group.memberCount - args.goalCount}
        }
    }
}
