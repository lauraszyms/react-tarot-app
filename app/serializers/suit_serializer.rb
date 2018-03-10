class SuitSerializer < ActiveModel::Serializer
  attributes :id, :name, :key_words
  has_many :cards
end
