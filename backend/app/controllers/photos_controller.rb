require 'securerandom'

class PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :update, :destroy]
  before_action :file_size_validation, only: [:upload]

  # GET /photos
  def index
    @photos = Photo.all

    render json: @photos
  end

  # POST /photos/upload
  def upload
    saved_file = GoogleCloud.instance.bucket.create_file params['file'].path, new_file_name(params['file'])
    render plain: saved_file.public_url
  end

  # GET /photos/1
  def show
    render json: @photo
  end

  # POST /photos
  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render json: @photo, status: :created, location: @photo
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /photos/1
  def update
    if @photo.update(photo_params)
      render json: @photo
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /photos/1
  def destroy
    @photo.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_photo
      @photo = Photo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def photo_params
      params.fetch(:photo, {})
    end

    def new_file_name(file)
      'photos/' + SecureRandom.uuid + File.extname(file.original_filename)
    end

    def file_size_validation
      render plain: '', status: :payload_too_large if params['file'].size() > 10000000
    end
end
