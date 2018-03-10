class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :suit_id
      t.string :key_words

      t.timestamps
    end
  end
end
