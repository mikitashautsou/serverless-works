const { Parse } = require('/opt/parse-sdk')

export const core = async (event: any): Promise<any> => {

    const { pathParameters: { waypointId } } = event


    console.log(event)
    // const user = await findUserByUsername({})


    // return {
    //     statusCode: 200,
    //     body: JSON.stringify(comments, null, 2),
    // };
};

const findUserByUsername = async (username: string) => {

    const query = new Parse.Query(Parse.User)
    query.equalTo('username', username)
    const [ user ] = await query.find()

    const result = user.toJSON()
    return {
        id: result.objectId,
        email: result.email,
        username: result.username,
        emailVerified: result.emailVerified,
    }
}

const createWaypoint = async (content: string, userId: string, waypointId: string, writerName: string) => {
    const WaypointComment = Parse.Object.extend('WaypointComment')

    const waypointComment = new WaypointComment()
    waypointComment.set('commentText', content)
    waypointComment.set('writerID', userId)
    waypointComment.set('waypointID', waypointId)
    waypointComment.set('writerName', writerName)
    await waypointComment.save()

}