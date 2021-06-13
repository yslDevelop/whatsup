/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      image
      video
      comments {
        items {
          id
          postID
          post {
            id
            title
            content
            image
            video
            createdAt
            updatedAt
          }
          nickname
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        image
        video
        comments {
          items {
            id
            postID
            nickname
            content
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      post {
        id
        title
        content
        image
        video
        comments {
          items {
            id
            postID
            nickname
            content
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nickname
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        post {
          id
          title
          content
          image
          video
          comments {
            nextToken
          }
          createdAt
          updatedAt
        }
        nickname
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;