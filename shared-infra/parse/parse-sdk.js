
const Parse = require('parse/node')

Parse.serverURL = 'https://parseapi.back4app.com' // This is your Server URL

const PARSE_APPLICATION_ID = 'ocjIcaAUeWnDXuT9w9t0SQjyDHk2H3T8DyUe0qas'
const PARSE_JAVASCRIPT_KEY = 'FCgLHVgrfCE3vk7mvgfTOAGZaG6hUcecnzELoU4A'
const PARSE_MASTER_KEY = 'hjX7ISfTyWm67YTcDd5HkRB8C78iFwLet9y53hbS'

Parse.initialize(
    PARSE_APPLICATION_ID,
    PARSE_JAVASCRIPT_KEY,
    PARSE_MASTER_KEY
)

Parse.Cloud.useMasterKey()

module.exports =  { Parse }
