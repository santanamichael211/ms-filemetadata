function upload(){
  return new Promise(function(resolve,reject){
  
  var upFile = document.getElementById("up-file");
    
    $.ajax({
    type:"POST",
    url:"/get-file-size",
    success: function(response){
      if("files" in upFile){
        if(upFile.files.length == 0){
          reject("No file selected");
        }
      else{
        resolve(upFile);
      }  
      }
    },
    error: function(err){
    reject(err);
    }  
    })
      
    
    
  
    
    
    
    
    
    
  });
}