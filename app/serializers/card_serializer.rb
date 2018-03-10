class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :key_words
  belongs_to :suit
end
