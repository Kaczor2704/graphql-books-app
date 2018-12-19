'use strict';

import {GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";

import authorType from './authorType'


export default new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        shortDescription: { type: GraphQLString },
        description: { type: GraphQLString },
        pages: { type: GraphQLInt},
        isbn: { type: GraphQLInt },
        releaseDate: { type: GraphQLString },
        author: { type: authorType}
    })

});