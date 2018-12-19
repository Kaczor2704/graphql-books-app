'use strict';

import {GraphQLID, GraphQLNonNull, GraphQLObjectType} from "graphql";
import authorType from "../type/authorType";
import authorInput from "../input/authorInput";
import {addAuthor} from "../../controllers/authorsController";
import bookInput from "../input/bookInput";
import bookType from "../type/bookType";
import {addBook} from "../../controllers/booksController";

export default new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root of all mutations',
    fields: {
        addAuthor: {
            type: authorType,
            description: 'Create new author',
            args: {input: {type: authorInput}},
            resolve: addAuthor
        },
        addBook: {
            type: bookType,
            description: 'Create new book',
            args: {
                authorId: {type: new GraphQLNonNull(GraphQLID)},
                input: {type: bookInput},
            },
            resolve: addBook
        }
    }
});