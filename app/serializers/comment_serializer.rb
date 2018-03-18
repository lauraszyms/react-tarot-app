class CommentSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :content
end
