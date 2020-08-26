# Retropic
Retropic is a retro hardware community where users share their vintage collections. The application uses NodeJS with Handlebars and MongoDB to store user's posts.

## Run the application

1. Install MongoDB and NodeJS clients on your machine.
2. In main application's directory run `npm install` to install required dependencies.
2. Navigate to */src* directory and run `npm run dev` to start the server, by default it'll start on port 3000.

### MongoDB 

If for some reason there is any trouble with MongoDB, make sure the database is created with name **retropic** and it has the collecion **images** with at least one register.

To see the data on database, follow these steps:

1. Run `mongo` on terminal to open MongoDB client.
2. Type `retropic` and then `show dbs` to see all available databases.
3. Type `use retropic` to switch to our database, `show collections` and finally `db.images.find().pretty()` will list all data saved.


## Example

### Home

The user can upload an image from its computer, add a title and a description to create a post.

![Home](https://i.imgur.com/urwPhAX.png)

### Post Details

Once a post is created, the title, description and image will be shown. The user can delete, give a like or leave a comment on the post. Also, the post shows the date created, number of likes and visits.

![Image Details](https://i.imgur.com/ipubsWN.png)

### Comments Section

All the comments on a post are listed here, the user with its gravatar associated, name, time posted and comment are included.

![Comments](https://i.imgur.com/S6tQd0v.png)

### Stats & Most Popular & Latest Comments Sections

Miscellaneous information regarding quantity of uploaded images, comments, views, likes, most popular uploads and latests comments will be shown in this sections.

![More Data](https://i.imgur.com/aCgWWlu.png)