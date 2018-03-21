class AddLikesToCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :likes, :integer
  end
end
