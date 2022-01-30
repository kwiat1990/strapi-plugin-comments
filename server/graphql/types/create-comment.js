module.exports = ({ nexus }) => nexus.inputObjectType({
  name: "CreateComment",
  definition(t) {
    t.nonNull.string("content")
    t.nonNull.string("relation")
    t.id("threadOf")
    t.field("author", { type: 'CreateCommentAuthor' })
  }
})