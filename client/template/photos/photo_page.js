Template.photoPage.events({
    'submit form': function(event){
      event.preventDefault();
      var captionValue = event.target.caption.value;
      var photoId = event.target.photoId.value;
      console.log(captionValue)
      console.log(photoId)
      Photos.update({_id: photoId}, {
        $set: {
          caption: captionValue
        }
      })
    }
});