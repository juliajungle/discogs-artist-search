# The build

I used CRA to get something working quickly,.

[Create React App](https://github.com/facebook/create-react-app).

Once installed, you can run `npm start`

# How to use the app

The search form expects an artist name to call the search API. Once you have entered one and submitted the form, the artist id is returned. (I just take the first one returned)
Then the artist and artist releases API are called using that id.
The artist API is also called on clicking on the individual band members for a bit more info about them.

## Still to do

- Styling!
- Tests
- Use more of the data, such as artist links and release info
- More work needs to be done to ensure the correct data us always returned. For example, just taking the first item from the search response might not be the most useful.
