function upload(){
  
  var upFile = document.getElementById("up-file");
  
  if("files" in upFile){
        if(upFile.files.length == 0){
          console.log("No File Selected");
        }
      else{
      
          
    $.ajax({
    type:'POST',
    url:"/get-file-size",
    data:{size: upFile.files[0].size},  
    success: function(response){
      alert("Success");
    },
    error: function(err){
     alert("error occured");
    }  
    },function(){
    
    window.location.href = "/get-file-size";
    
    });
        
        
      }  
      }
}