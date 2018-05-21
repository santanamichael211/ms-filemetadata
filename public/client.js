function upload(){
  
  var upFile = document.getElementById("up-file");
  
  if("files" in upFile){
        if(upFile.files.length == 0){
          console.log("No File Selected");
        }
      else{
      
        var formData = new FormData();
        formData.append("file",upFile.files[0]);
          
    $.ajax({
    type:'POST',
    url:"/get-file-size",
    data:formData,
    processData: false,
    contentType: false,
    success: function(response){
      alert("Data Uploaded Successfully");
      document.getElementById("submit").removeAttribute("disabled");
    },
    error: function(err){
     alert("error occured");
    }  
    });
        
        
      }  
      }
}