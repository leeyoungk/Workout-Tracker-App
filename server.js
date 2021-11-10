const express = require( 'express' );
const logger = require( 'morgan' );
const mongoose = require( 'mongoose' );


const PORT = process.env.PORT || 3000;
const app = express();

const routes = require( './routes' );
app.use( routes );

app.use( logger( 'dev' ) );
app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );
app.use( express.static( 'public' ) );

app.use(require('./routes/api.js'))
app.use(require('./routes/view.js'))


mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/workout',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	}
);


app.listen( PORT, () => {
	console.log( `App running on port ${PORT}` );
} );