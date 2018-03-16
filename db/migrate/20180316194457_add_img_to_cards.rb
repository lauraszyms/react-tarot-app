class AddImgToCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :img, :string
  end
end
