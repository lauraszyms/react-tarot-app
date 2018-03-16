class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :key_words, :img
  belongs_to :suit
end
