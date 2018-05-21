function upload(){
  
  var upFile = document.getElementById("up-file");
  
  if("files" in upFile){
        if(upFile.files.length == 0){
          console.log("No File Selected");
        }
      else{
      
          
    $.ajax({
    type:'get',
    url:"/get-file-size",
    dataType:"text",
    data:{"size": upFile.files[0].size},  
    success: function(response){
      alert("Success");
      window.location.href = "/get-file-size";
    },
    error: function(err){
     alert("error occured");
    }  
    });
        
        
      }  
      }
}