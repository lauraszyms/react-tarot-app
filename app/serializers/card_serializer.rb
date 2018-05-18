class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :key_words, :img, :likes
  belongs_to :suit
end
