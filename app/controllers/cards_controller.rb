class CardsController < ApplicationController
    before_action :set_card, only: [:show, :edit, :update]
    skip_before_action :verify_authenticity_token

  def index
    @cards = Card.all
    render json: @cards
  end

  def show
   render json: @card
  end

  def new
   @card = Card.new
  end

  def create
   @card = Card.create(card_params)
  end

  def edit
  end

  def update
   @card.update(card_params)
  end

 private

 def set_card
   @card = Card.find_by(:id => params[:id])
 end

 def card_params
  params.permit(:card).permit(:name, :suit_id, :key_words, :img, :likes)
 end

end
