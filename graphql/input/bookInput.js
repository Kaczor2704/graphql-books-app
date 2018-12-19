'use strict';

import {GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
   name: 'BookInput',
   fields: () => {
       return ({
           title: {type: new GraphQLNonNull(GraphQLString)},
           shortDescription: {type: GraphQLString},
           description: {type: GraphQLString},
           pages: {type: GraphQLInt},
           isbn: {type: GraphQLString},
           releaseDate: {type: GraphQLString}
       });
   }
});