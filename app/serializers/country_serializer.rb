class CountrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug

  has_many :posts
end
