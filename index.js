'use strict';

import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

import 'babel-polyfill';


import {init as initGraphQLSchema} from './graphql/schema';

dotenv.config();

// mongoose.connect(process.env.MONGODB_URI, {
mongoose.connect("mongodb://localhost:27017/books", {
    useMongoClient: true,
    promiseLibrary: require('bluebird')
});

const app = express();
app.use('/', initGraphQLSchema());

app.listen(process.env.port || 4000);
