var config = {}
// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://mulwa:m1234@cluster0.2wa2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    development: 'mongodb+srv://mulwa:m1234@cluster0.2wa2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    test: 'mongodb+srv://mulwa:m1234@cluster0.2wa2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
}
module.exports = config;