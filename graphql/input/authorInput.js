'use strict';

import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: 'AuthorInput',
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString)},
        bio: { type: GraphQLString },
        birthday: { type: GraphQLString },
        sex: { type: GraphQLString }
    })
});
