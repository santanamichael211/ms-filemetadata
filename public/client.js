function upload(){
  var upFile = document.getElementById("up-file");
    $.ajax({
    type:"POST",
    url:"/get-file-size",
    success: function(response){
      if("files" in upFile){
        if(upFile.files.length == 0){
          return "No File Selected";
        }
      else{
        console.log(upFile);
        return upFile;
      }  
      }
    },
    error: function(err){
    return err;
    }  
    })
}