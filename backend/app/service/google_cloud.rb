require 'singleton'
require 'google/cloud/storage'

class GoogleCloud
  include Singleton

  def initialize
    @storage = Google::Cloud::Storage.new(
        project_id: ENV["GAI_GOSAPI_BY_GOOGLE_CLOUD_PROJECT_ID"],
        credentials: ENV["GAI_GOSAPI_BY_GOOGLE_CLOUD_KEYSTORE"],
    )
    @bucket = @storage.bucket 'gai.gosapi.by'
  end

  def bucket
    @bucket
  end
end
