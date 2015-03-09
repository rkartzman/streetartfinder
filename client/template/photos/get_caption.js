Template.getCaption.events({
    'submit form': function(event){
      event.preventDefault();
      var captionValue = event.target.caption.value;
      var photoId = event.target.photoId.value;
      Photos.update({_id: photoId}, {
        $set: { caption: captionValue }
      })
    }
});