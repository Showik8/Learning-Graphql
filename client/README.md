i will write here how to use GraphQL's tools

if we want to make mutation we need to make query in (gql``)
for example we fetching all user its means we dont need any args we can do like this

create variable called GET_ALL_USERS its will be better if name will be meaningfull and capitalized
invariable we will save gql object and make query named as on the server its look like endpoints, next step we must to write keyword query because we geting data from server in other hands we have to write mutation i will explein it next,
after query we must to write object name where we will write which fields want to fetch. in my case it is like this, in object we must to write query name from server on my server it is users and here i can write fields which i want to get from users data

const GET_ALL_USERS = gql` 
 query ALL_USERS {
    users {
      id
      name
      age
      email
      nationality
    }
  }`;

how to use it?
in component where we want to fetch all user importing useQuery hook from appolo/client and creating variable which equals useQuery hook and passing
previous variable(GET_ALL_USERS) as argument

const {} = useQuery(GET_ALL_USERS)

its returning {data,error,loading} we can use it as rendering conditions
finnaly it look like this

const {data,error,loading} = useQuery(GET_ALL_USERS)

## if we log the data we will see users object with list of users

if we decide to get one user by id or name

we have to write query and pass arguments in my case is fetched by id

export const SPECIAL_USERS = gql`  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      age
      email
    }
  }`;

$id symbol tells GraphQL that the value will be provided later from our client-side code. in React, we simply call the query and pass the variable

getUser({
variables: { id: userId },
});

This makes our query flexible, reusable, and type-safe. GraphQL takes the provided id and returns exactly the user that matches it.
