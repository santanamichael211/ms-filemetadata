function upload(){
  
  var upFile = document.getElementById("up-file");
  
  if("files" in upFile){
        if(upFile.files.length == 0){
          console.log("No File Selected");
        }
      else{
        var data = {
        size: upFile.files[0].size
        }
          
    $.ajax({
    type:'POST',
    url:"/get-file-size",
    data:data,
    contentType: 'application/json',
    success: function(response){
      console.log("Success");
    },
    error: function(err){
      console.log(err);
    }  
    })
      }  
      }
}