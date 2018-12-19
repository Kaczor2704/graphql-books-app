'use strict';

import {GraphQLID, GraphQLList, GraphQLObjectType} from "graphql";
import authorType from "../type/authorType";
import {getAllAuthors, getAuthorById} from "../../controllers/authorsController";
import bookType from "../type/bookType";
import {getAllBooks, getBookById} from "../../controllers/booksController";

export default new GraphQLObjectType({
    name: 'Query',
    description: 'Root of all queries',
    fields: {
        authors: {
            type: new GraphQLList(authorType),
            description: 'List of all authors',
            resolve: getAllAuthors
        },
        author: {
            type: authorType,
            description: 'Get author by ID',
            args: { id: { type: GraphQLID } },
            resolve:  getAuthorById
        },
        book: {
            type: bookType,
            description: 'Get book by ID',
            args: { id: { type: GraphQLID }},
            resolve: getBookById
        },
        books: {
            type: new GraphQLList(bookType),
            description: 'List of all books',
            resolve: getAllBooks
        }
    }
});
