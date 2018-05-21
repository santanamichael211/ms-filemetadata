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
    success: function(response){
      alert("Success");
      window.location.href="/get-file-size";
    },
    error: function(err){
     console.log("error occured");
    }  
    });
        
        
      }  
      }
}