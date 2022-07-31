class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :body, :country_id
end
