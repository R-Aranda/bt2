class CreateCountries < ActiveRecord::Migration[5.2]
  def change
    create_table :countries do |t|
      t.string :name, null: false
      t.string :slug, null: false
      t.timestamps null: false
    end
  end
end
