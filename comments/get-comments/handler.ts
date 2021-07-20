const { Parse } = require('/opt/parse-sdk')
import * as fs from 'fs'

export const core = async (event: any): Promise<any> => {

    const { pathParameters: { waypointId } } = event

    console.log('event', waypointId)
    const comments = await fetchCommentsFromParse(waypointId)
    return {
        statusCode: 200,
        body: JSON.stringify(comments, null, 2),
    };
};
  

interface Comment {
    id: string
    date: Date
    content: string
    authorName: string
    waypointId: string
}


export const fetchCommentsFromParse = async (waypointId: string): Promise<Comment[]> => {
    const WaypointComment = Parse.Object.extend(`WaypointComment`)

    const query = new Parse.Query(WaypointComment).equalTo(
        `waypointID`,
        waypointId
    )
    const results = await query.find()

    return results
        .map((rawComment) => rawComment.toJSON())
        .map((rawComment) => ({
            id: rawComment.objectId,
            date: new Date(rawComment.dateWritten?.iso),
            content: rawComment.commentText,
            authorName: rawComment.writerName,
            waypointId: rawComment.waypointID,
        }))
}